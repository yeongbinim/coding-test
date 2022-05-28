package week10.ex2;

class Item <T> {
    private T data;
    public T get() { return data; }
    public void set(T data) { this.data = data; }
}

public class WildcardTest {
    static String concat(Item<?> s1,Item<?> s2) {
        return s1.get().toString() + s2.get().toString();
    }
    static double max1(Item<? extends Number> x, Item<? extends Number> y) {
        double dx = x.get().doubleValue();
        double dy = y.get().doubleValue();
        if(dx > dy) return dx;
        else return dy;
    }
    public static void main(String[] args) {
        Item<Integer> i1 = new Item<>();
        Item<Double> d1 = new Item<>();
        i1.set(10);
        d1.set(10.1);
        double maxValue = max1(i1, d1);
        System.out.println(maxValue);
        Item<String> s1 = new Item<>();
        s1.set("Hello");
        String s = concat(i1, s1);
        System.out.println(s);
    }
}
