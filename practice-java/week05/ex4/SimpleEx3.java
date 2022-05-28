package week05.ex4;

class Pen {
    private int amount;
    public Pen(int amount) { this.amount = amount; }
    public int getAmount() { return amount; }
    public void setAmount (int amount) { this.amount = amount; }
}

class ColorPen extends Pen{
    private String color;
    public ColorPen(int amount, String color){
        super(amount);
        this.color = color;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
}

class SharpPencil extends Pen{
    private int width;

    public SharpPencil(int amount, int width){
        super(amount);
        this.width = width;
    }
    public int getWidth(){
        return width;
    }
}


class BallPen extends ColorPen{
    public BallPen(int amount, String color){
        super(amount, color);
    }
}

class FountainPen extends ColorPen{
    public FountainPen(int amount, String color){
        super(amount, color);
    }
    public void refill(int n) {
        setAmount(n);
    }
}

public class SimpleEx3 {
    private static void print(Pen pen){
        if (pen instanceof BallPen)
            System.out.println("볼펜의 수는 " + pen.getAmount() + " 색깔은 " + ((BallPen) pen).getColor());
        else if (pen instanceof FountainPen)
            System.out.println("만년필의 수는 " + pen.getAmount() + " 색깔은 " + ((FountainPen) pen).getColor());
        else if (pen instanceof SharpPencil)
            System.out.println("샤프의 수는 " + pen.getAmount() + " 굵기는 " + ((SharpPencil) pen).getWidth());
    }

    public static void main(String[] args){
        int i;
        Pen p[] = new Pen[3];
        p[0] = new SharpPencil(10, 5);
        p[1] = new BallPen(5, "빨간색");
        p[2] = new FountainPen(2, "검은색");

        for (i = 0; i < p.length; i++)
            print(p[i]);
    }
}
