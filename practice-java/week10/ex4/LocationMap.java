package week10;

import java.util.*;

class Location {
    private double longitude;
    private double latitude;

    public Location(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public void setLocation(double longitude, double latitude){
        this.longitude = longitude;
        this.latitude = latitude;
    }
    public double getLongitude() {
        return longitude;
    }
    public double getLatitude() {
        return latitude;
    }
}

public class LocationMap {
    private Scanner scanner;
    private HashMap<String, Location> locMap;
    public LocationMap(){
        scanner = new Scanner(System.in);
        locMap = new HashMap<String, Location>();
    }
    public void setCity() {
        System.out.print("도시이름 경도 위도를 입력하세요 >> ");
        String city = scanner.next();
        double longitude = scanner.nextDouble();
        double latitude = scanner.nextDouble();
        Location loc = new Location(longitude, latitude);
        locMap.put(city, loc);
    }
    public boolean printCity() {
        System.out.print("도시 이름 입력 (종료 원하면 '종료' 입력) >> ");
        String city = scanner.next();
        if (city.equals("종료")) return false;
        Location loc = locMap.get(city);
        if (loc == null) {
            System.out.println(city + "는 없습니다.");
            return true;
        }
        else {
            System.out.println(city + " " + loc.getLongitude() + " " + loc.getLatitude());
            return true;
        }
    }
    public static void main(String [] args) {
        LocationMap lm = new LocationMap();
        for (int i = 0; i < 4; i++) lm.setCity();
        System.out.print("\n");
        while(true) {
            boolean isContinued = lm.printCity();
            if (!isContinued) break;
        }
    }
}
