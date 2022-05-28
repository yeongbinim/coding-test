package HW;

public abstract class GameObject {
    protected int x, y;
    public GameObject(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public int getX() { return x; }
    public int getY() { return y; }
    public boolean collide(GameObject p) {
        if(this.x == p.getX() && this.y == p.getY())
            return true;
        else
            return false;
    }
    protected abstract boolean move();
    protected abstract char getShape();
}

class Thief extends GameObject{
    private char pattern;
    public Thief (int x, int y) {
        super(x, y);
    }
    @Override
    protected boolean move(){
        if (pattern == 'r') return true; //도둑질
        else if (pattern == 'w') y -= 1; //상
        else if (pattern == 's') y += 1; //하
        else if (pattern == 'a') x -= 1; //좌
        else if (pattern == 'd') x += 1; //우
        return false;
    }
    @Override
    protected char getShape(){
        return '&';
    }
    protected boolean setPattern(char c){
        pattern = c;
        if (c == 'r') return true; //도둑질
        else if (c == 'w' && y > 0) return true; //상
        else if (c == 's' && y < 2) return true; //하
        else if (c == 'a' && x > 0) return true; //좌
        else if (c == 'd' && x < 2) return true; //우
        return false;
    }
}

class Police extends GameObject{
    public Police (int x, int y) {
        super(x, y);
    }
    @Override
    protected boolean move(){
        while (true) {
            int n = (int) (Math.random() * 5); // n은 [0~4] 사이의 랜덤 정수
            if (n == 0)
                break;
            else if (n == 1 && y > 0){ //상
                y -= 1;
                break;
            }
            else if (n == 2 && y < 2){ //하
                y += 1;
                break;
            }
            else if (n == 3 && x > 0){ //좌
                x -= 1;
                break;
            }
            else if (n == 4 && x < 2){ //우
                x += 1;
                break;
            }
        }
        return false;
    }
    @Override
    protected char getShape(){
        return 'p';
    }
}