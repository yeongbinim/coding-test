package week11.ex3;

import java.io.*;
import java.util.*;
public class BufferedBinaryCopy {
    public static void main(String[] args) {
        int c;
        Scanner sc = new Scanner(System.in);
        System.out.print("Source file name: ");
        String src = sc.next();
        System.out.print("Dest file name: ");
        String dest = sc.next();
        byte [] buf = new byte[1024];
        try {
            FileInputStream fi = new FileInputStream(src);
            FileOutputStream fo = new FileOutputStream(dest);
            long start = System.currentTimeMillis();
            do {
                c = fi.read(buf);
                if (c > 0)
                    fo.write(buf, 0, c);
                System.out.println(c);
            } while (c == 1024);
            long end = System.currentTimeMillis();
            fo.close();
            fi.close();
            System.out.println((end - start) + "ms : " + src + "를 " + dest + "로 복사하였습니다.");
        } catch (IOException e) {
            System.out.println("파일 복사 오류");
        }
    }
}
