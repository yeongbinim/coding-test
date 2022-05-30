package week11.ex2;

import java.io.*;
import java.util.*;

public class CompareFiles {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("File1 name: ");
        String file1 = sc.next();
        System.out.print("File2 name: ");
        String file2 = sc.next();
        try {
            FileInputStream fin1 = new FileInputStream(file1);
            FileInputStream fin2 = new FileInputStream(file2);
            int c;
            boolean equal = true;
            while ((c = fin1.read()) != -1) {
                if (c != fin2.read()) {
                    equal = false;
                    break;
                }
            }
            if (equal && fin2.read() != -1) equal = false;
            if (equal) System.out.println("Equal");
            else System.out.println("Different");
            fin2.close();
            fin1.close();
        } catch (IOException e) {
            System.out.println("IOException");
        }
        sc.close();
    }
}
