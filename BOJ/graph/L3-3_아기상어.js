//개선할 점: 우선순위 큐로 재사용성 높이기
function bfs(graph, startNode, edgeRegular, moveCondtion, endCondition) {
  const visit = makeVisit(graph, graph[0].length);
  visit[startNode.x + 1][startNode.y + 1] = 1;
  const queue = new Array();
  queue.push([startNode.x + 1, startNode.y + 1]);

  let idx = 0;
  while (queue.length > idx) {
    const [curX, curY] = queue[idx++];
    for (let r of edgeRegular) {
      const nextX = curX + r[0];
      const nextY = curY + r[1];
      if (
        visit[nextX][nextY] === 0 &&
        moveCondtion(graph[nextX - 1][nextY - 1], startNode)
      ) {
        visit[nextX][nextY] = visit[curX][curY] + 1;
        queue.push([nextX, nextY]);
        if (
          graph[nextX - 1][nextY - 1] !== 0 &&
          endCondition(graph[nextX - 1][nextY - 1], startNode)
        )
          return {
            x: nextX - 1,
            y: nextY - 1,
            movedLen: visit[nextX][nextY] - 1,
          };
      }
    }
  }
  return { x: -1, y: -1, movedLen: -1 };
}

function solution(graph) {
  let answer = 0;
  const babyShark = {
    ...findIndex2d(graph, 9),
    size: 2,
    eat: 0,
  };
  graph[babyShark.x][babyShark.y] = 0;
  for (;;) {
    const { x, y, movedLen } = bfs(
      graph,
      babyShark,
      [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
      ],
      (fishSize, { size }) => {
        if (fishSize > size) return false;
        else return true;
      },
      (fishSize, { size }) => {
        if (fishSize < size) return true;
        else return false;
      }
    );
    if (movedLen === -1) break;
    babyShark.x = x;
    babyShark.y = y;
    babyShark.eat += 1;
    if (babyShark.eat >= babyShark.size) {
      babyShark.eat = 0;
      babyShark.size += 1;
    }
    graph[x][y] = 0;
    answer += movedLen;
    console.log(`x: ${x}, y: ${y}, len: ${movedLen}`);
    console.log("");
  }

  return answer;
}

//=========================util=========================//

function makeVisit(graph, len) {
  return [
    Array(len + 2).fill(-1),
    ...graph.map(() => [-1, ...Array(len).fill(0), -1]),
    Array(len + 2).fill(-1),
  ];
}

function findIndex2d(arr, target) {
  const x = arr.findIndex((line) => line.includes(target));
  if (x < 0) return -1;
  const y = arr[x].indexOf(target);
  if (y < 0) return -1;
  return { x, y };
}

//=========================inout=========================//

function getDataSync(path) {
  return require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(" ").map((item) => +item));
}

const FILE = "../input.txt";
// const FILE = "/dev/stdin";
console.log(solution(getDataSync(FILE)));
