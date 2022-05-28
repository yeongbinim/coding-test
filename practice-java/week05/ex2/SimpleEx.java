package week05.ex2;

class Pen {
    private int amount;
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
}

class ColorPen extends Pen {
    private String color;
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
}

class SharpPencil extends Pen{
    private int width;
}


class BallPen extends ColorPen{
}

class FountainPen extends ColorPen{
    public void refill(int n) {
        setAmount(n);
    }
}

public class SimpleEx {
    public static void main(String[] args){
        SharpPencil sp = new SharpPencil();
        BallPen bp = new BallPen();
        FountainPen fp = new FountainPen();

        sp.setAmount(10);
        bp.setAmount(5);
        fp.setAmount(2);

        System.out.println("샤프의 수는 " + sp.getAmount());
        System.out.println("볼펜의 수는 " + bp.getAmount());
        System.out.println("만년필의 수는 " + fp.getAmount());
    }
}
