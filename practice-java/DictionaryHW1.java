abstract class PairMap {
    protected String keyArray [];
    protected String valueArray [];
    abstract String get(String key);
    abstract void put(String key, String value);
    abstract String delete(String key);
    abstract int length();
}

class Dictionary extends PairMap {
    protected int count = 0;
    public Dictionary(int capacity) {
        keyArray = new String [capacity];
        valueArray = new String [capacity];
    }
    @Override
    String get(String key) {
        for(int i=0; i<count; i++) { // 현재 배열에 저장된 원소 개수만큼 반복
            if(keyArray[i].equals(key))
                return valueArray[i];
        }
        return null; // key를 발견할 수 없다면 null리턴
    }
    @Override
    void put(String key, String value) {
        int i;
        for (i = 0; i < count; i++) {
            if (keyArray[i].equals(key)) break;
        }
        if (i == count) {
            if (i < keyArray.length) {
                keyArray[i] = key;
                valueArray[i] = value;
                count++;
            }
        } else {
            keyArray[i] = key;
            valueArray[i] = value;
        }
    }
    @Override
    String delete(String key) {
        int i=0;
        for(i=0; i<count; i++) { // 현재 배열에 저장된 원소 개수만큼 반복
            if(keyArray[i].equals(key))
                break;
        }
        if(i==count) // 발견 안됨
            return null;
        String value = valueArray[i];
// 앞으로 한 자리씩 이동
        int last = count-1;
        for(int j=i; j<last; j++) {
            keyArray[j] = keyArray[j+1];
            valueArray[j] = valueArray[j+1];
        }
        count--;
        return value;
    }
    @Override
    int length() { return count; }
}

public class DictionaryHW1 {
    public static void main(String[] args) {
        Dictionary dic = new Dictionary(10);
        dic.put("Apple", "사과");
        dic.put("Java", "자바");
        dic.put("Eclipse", "이클립스");
        System.out.println("현재 저장된 아이템의 수는 " + dic.length());
        System.out.println("Apple의 값은 " + dic.get("Apple"));
        System.out.println("Java의 값은 " + dic.get("Java"));
        dic.delete("Java");
        System.out.println("현재 저장된 아이템의 수는 " + dic.length());
        System.out.println("Java의 값은 " + dic.get("Java"));
    }
}