package week10.ex1;

class Rect<T extends Number>{
    private T width;
    private T height;
    public Rect(T width, T height) {
        this.width = width;
        this.height = height;
    }
    public T getWidth() {
        return width;
    }
    public void setWidth(T width) {
        this.width = width;
    }
    public T getHeight() {
        return height;
    }
    public void setHeight(T height) {
        this.height = height;
    }
    @Override
    public String toString() {
        return "Rect [width=" + width.toString() + ", height=" + height.toString() + "]";
    }
}

public class GenericTest2 {
    public static void main(String[] args) {
        Rect<Integer> r1 = new Rect<>(1, 2);
        System.out.println(r1);
        Rect<Double> r2 = new Rect<>(1.1, 2.2);
        System.out.println(r2);
    }
}
