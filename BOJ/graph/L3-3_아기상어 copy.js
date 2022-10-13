// @ts-check

/** x, y 쌍 Index
 * @typedef {Object} Index
 * @property {number} x - idx x
 * @property {number} y - idx y
 */

/**
 * 탐색할 그래프의 정보
 * @typedef {Object} GraphInfo
 * @property {Array<Array<number>>} graph - graph
 * @property {Index} startIdx - start idx
 * @property {number} curValue - cur value
 */

/**
 * 그래프를 너비 우선을 탐색해서 원하는 위치의 값을
 * @param {GraphInfo} graphInfo
 * @param {(function(GraphInfo, Index):boolean)} moveCondition
 * @param {(function(GraphInfo, Index):boolean)} endCondition
 * @return {Array<Index>} 최단 경로에 end 조건을 만족하는 Index 리스트
 */
function bfs(graphInfo, moveCondition, endCondition) {
  const endList = [];
  let flag = 999;
  const visit = makeVisit(graphInfo.graph, graphInfo.graph[0].length);
  visit[graphInfo.startIdx.x + 1][graphInfo.startIdx.y + 1] = 1;
  const queue = new Array();
  queue.push({ x: graphInfo.startIdx.x, y: graphInfo.startIdx.y });

  let idx = 0;
  while (queue.length > idx) {
    const cur = queue[idx++];
    for (let r of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const next = {
        x: cur.x + r[0],
        y: cur.y + r[1],
      };
      if (
        visit[next.x + 1][next.y + 1] === 0 &&
        moveCondition(graphInfo, next) &&
        flag >= visit[next.x + 1][next.y + 1] - 1
      ) {
        visit[next.x + 1][next.y + 1] = visit[cur.x + 1][cur.y + 1] + 1;
        queue.push(next);
        if (
          graphInfo.graph[next.x][next.y] !== 0 &&
          endCondition(graphInfo, next)
        ) {
          flag = visit[next.x + 1][next.y + 1] - 1;
          endList.push(next);
        }
      }
    }
  }
  return endList;
}

/**
 * 더 큰지 비교하는 함수
 * @param {GraphInfo} graphInfo
 * @param {Index} idx
 * @return {boolean}
 */
function isBig(graphInfo, idx) {
  if (graphInfo.curValue > graphInfo.graph[idx.x][idx.y]) return true;
  else return false;
}

/**
 * 작지 않은지 비교하는 함수
 * @param {GraphInfo} graphInfo
 * @param {Index} idx
 * @return {boolean}
 */
function isNotSmall(graphInfo, idx) {
  if (graphInfo.curValue >= graphInfo.graph[idx.x][idx.y]) return true;
  else return false;
}

function solution(graph) {
  const babyShark = {
    ...findIndex2d(graph, 9),
    size: 2,
    eat: 0,
  };
  graph[babyShark.x][babyShark.y] = 0;
  const list = bfs(
    {
      graph,
      startIdx: { x: babyShark.x, y: babyShark.y },
      curValue: babyShark.size,
    },
    isNotSmall,
    isBig
  );
  return list;
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
  if (x < 0) return {};
  const y = arr[x].indexOf(target);
  if (y < 0) return {};
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
