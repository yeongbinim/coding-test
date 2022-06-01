package week12;

import java.awt.*;
import javax.swing.*;
public class CalculatorFrame extends JFrame {
    public CalculatorFrame() {
        setTitle("계산기 프레임");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.add(new SouthPanel(), BorderLayout.SOUTH);
        c.add(new CenterPanel(), BorderLayout.CENTER);
        c.add(new NorthPanel(), BorderLayout.NORTH);
        setSize(400,400);
        setVisible(true);
    }
    public static void main(String[] args) {
        new CalculatorFrame();
    }
}

class SouthPanel extends JPanel {
    public SouthPanel() {
        setLayout(new FlowLayout(FlowLayout.LEFT));
        add(new JLabel("계산 결과"));
        add(new JTextField(15));
    }
}
class CenterPanel extends JPanel {
    public CenterPanel() {
        setLayout(new GridLayout(4,4,5,5));
        for(int i=0; i<10; i++) {
            JButton b = new JButton(Integer.toString(i));
            add(b);
        }
        add(new JButton("CE"));
        add(new JButton("계산"));
        add(new JButton("+"));
        add(new JButton("-"));
        add(new JButton("x"));
        add(new JButton("/"));
    }
}
class NorthPanel extends JPanel {
    public NorthPanel() {
        setLayout(new FlowLayout());
        add(new JLabel("수식입력"));
        add(new JTextField(16));
    }
}