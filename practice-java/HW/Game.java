package HW;

import java.util.Scanner;

public class Game {
    static private char map[][];
    static private int count = 0;
    static void inputThief(Scanner scanner, Thief thief){
        char temp;
        while(true) {
            System.out.print("왼쪽(a), 아래(s), 위(w), 오른쪽(d), 도둑질(r) >> ");
            temp = scanner.next().charAt(0);
            if (thief.setPattern(temp))
                break;
            System.out.println("해당 범위 내에 다시 입력해주세요");
        }
    }
    static void initMap(){
        map = new char[3][3];
        for (int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++)
                map[i][j] = '^';
        }
    }
    static void printMap(Thief thief, Police police){
        int tX = thief.getX(), tY = thief.getY(), pX = police.getX(), pY = police.getY();
        for (int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                if (pX == j && pY == i)
                    System.out.print(police.getShape());
                else if (tX == j && tY == i)
                    System.out.print(thief.getShape());
                else
                    System.out.print(map[i][j]);
            }
            System.out.println("");
        }
    }
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        initMap();
        Thief thief = new Thief(2, 2);
        Police police = new Police(0, 0);
        System.out.println("임영빈/컴퓨터공학과/12161219");
        System.out.println("** 도둑잡기 게임을 시작합니다. **\n");
        printMap(thief, police);
        while(true){
            police.move();
            inputThief(scanner, thief);
            if (thief.move() && map[thief.getY()][thief.getX()] == '^') {
                map[thief.getY()][thief.getX()] = '-';
                count += 1;
            }
            printMap(thief, police);
            if (thief.collide(police) || count == 9)
                break;
        }
        if (count == 9)
            System.out.println("당신이 이겼습니다!");
        else
            System.out.println("당신이 졌습니다!");
        scanner.close();
    }
}
