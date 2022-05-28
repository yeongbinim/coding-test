package week07;
import java.util.Scanner;
public class CheckRegNumber {
    public static void main(String [] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("주민등록번호 입력(- 생략) >>");
        String regNum = scanner.next();
        int year = Integer.parseInt(regNum.substring(0,2));
        int month = Integer.parseInt(regNum.substring(2,4));
        int day = Integer.parseInt(regNum.substring(4,6));
        int typeNum = Integer.parseInt(regNum.substring(6,7));
        StringBuffer type = new StringBuffer("");
        switch (typeNum) {
            case 5:
            case 7:
                type.append("외국인");
            case 1:
            case 3:
            case 9:
                type.append("남성");
                break;
            case 6:
            case 8:
                type.append("외국인");
            case 2:
            case 4:
            case 0:
                type.append("여성");
                break;
        }
        int areaNum = Integer.parseInt(regNum.substring(7, 9));
        String area;
        if (areaNum <= 8) area = "서울특별시";
        else if (areaNum <= 12) area = "부산광역시";
        else if (areaNum <= 15) area = "인천광역시";
        else if (areaNum <= 25) area = "경기도";
        else if (areaNum <= 34) area = "강원도";
        else if (areaNum <= 39) area = "충청북도";
        else if (areaNum <= 41) area = "대전광역시";
        else if (areaNum <= 47) area = "충청남도";
        else if (areaNum <= 54) area = "전라북도";
        else if (areaNum <= 56) area = "광주광역시";
        else if (areaNum <= 66) area = "전라남도";
        else if (areaNum <= 69) area = "대구광역시";
        else if (areaNum <= 81) {
            if (areaNum == 76) area = "대구광역시";
            else area = "경상북도";
        }
        else if (areaNum <= 92) {
            if (areaNum == 85 || areaNum == 90) area = "울산광역시";
            else area = "경상남도";
        }
        else if (areaNum <= 95) area = "제주특별자치도";
        else if (areaNum == 96) area = "세종특별자치시";
        else area = "지역오류";
        System.out.println("생년월일 : " + year + "년 " + month + "월 " + day + "일");
                System.out.println("구분 : " + type);
        System.out.println("출생지역 : " + area);
    }
}
