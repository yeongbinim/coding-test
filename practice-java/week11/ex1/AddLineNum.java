package week11.ex1;

import java.io.*;
import java.util.*;

public class AddLineNum {
    public static void main(String[] args) {
        int lineNum = 1;
        try {
            FileReader fr = new FileReader("test_long.txt");
            Scanner scanner = new Scanner(fr);
            FileWriter fw = new FileWriter("test_long(line).txt");
            while (scanner.hasNext()) {
                String s = Integer.toString(lineNum) + "\t" +  scanner.nextLine() + "\n";
                fw.write(s);
                lineNum++;
            }
            fw.close();
            scanner.close();
            fr.close();
        } catch (IOException e) {
            System.out.println("파일 읽기 실패");
        }
    }
}
