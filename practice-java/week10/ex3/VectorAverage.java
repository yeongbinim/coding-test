package week10.ex3;

import java.util.*;

public class VectorAverage {
    static void printAverage(Vector<Integer> v) {
        double sum = 0;
        for (Integer num : v)
            sum += num.doubleValue();
        System.out.println("누적 평균은 " + sum/v.size() + "입니다.");
    }
    public static void main(String[] args) {
        int cur;
        Vector<Integer> v = new Vector<>();
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("숫자를 입력하세요 >> ");
            cur = scanner.nextInt();
            if (cur != 0) {
                v.add(cur);
                printAverage(v);
            }
            else
                break;
        }
        System.out.print("종료합니다.");
    }
}
