import java.util.*;
import java.io.*;

public class WordCountHW3 {
    static private final HashMap<String, Integer> map = new HashMap<>();
    static void updateMap(StringBuilder sb) {
        String key;
        int value;

        if (sb.length() != 0) {
            key = sb.toString().toLowerCase();
            if (map.containsKey(key)) {
                value = map.get(key);
                map.put(key, value + 1);
            } else {
                map.put(key, 1);
            }
        }
    }
    static boolean isSpace(char c, char[] separate) {
        for (char sep : separate) {
            if (sep == c)
                return true;
        }
        return (9 <= c && c <= 13) || c == 32; //공백문자 아스키코드로 체크
    }
    public static void main(String[] args) {
        int c;
        char[] separate = {',', '.', ':', ';', '?', '!', '[', ']', '(', ')', '\''};
        StringBuilder sb = new StringBuilder();
        Scanner scanner = new Scanner(System.in);

        System.out.println("임영빈/컴퓨터공학과/12161219");
        System.out.print("Input file name: ");
        String inputName = scanner.next();
        System.out.print("Output file name: ");
        String outputName = scanner.next();

        try {
            //파일 열기
            FileReader fin = new FileReader(inputName);
            FileWriter fo = new FileWriter(outputName);
            //파일 파싱
            while ((c = fin.read()) != -1) {
                if (isSpace((char) c, separate)){
                    updateMap(sb);
                    sb.setLength(0);
                }
                else
                    sb.append((char) c);
            }
            updateMap(sb);
            //파일 쓰기
            for (String key : map.keySet())
                fo.write(key + "\t" + map.get(key).toString() + "\n");
            //파일 닫기
            fo.close();
            fin.close();
        }
        catch (IOException e) {
            System.out.println("파일 복사 오류");
        }
        scanner.close();
    }
}
