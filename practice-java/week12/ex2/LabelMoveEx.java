package week13.ex2;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;


public class LabelMoveEx extends JFrame{
    private final JLabel text = new JLabel("Java");
    private final JButton left = new JButton("left");
    private final JButton right = new JButton("right");
    private final JButton top = new JButton("top");
    private final JButton down = new JButton("down");
    public LabelMoveEx() {
        setTitle("ex2");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new BorderLayout());

        MoveLabel ml = new MoveLabel();
        left.addActionListener(ml);right.addActionListener(ml);top.addActionListener(ml);down.addActionListener(ml);
        JPanel p = new JPanel();
        p.setLayout(new BorderLayout());
        p.add(left, BorderLayout.WEST); p.add(right, BorderLayout.EAST); p.add(top, BorderLayout.NORTH); p.add(down, BorderLayout.SOUTH);
        p.setBackground(Color.YELLOW);
        c.add(p, BorderLayout.NORTH);

        JPanel p2 = new JPanel();
        p2.setLayout(null);
        text.setLocation(0, 0);
        text.setSize(50, 20);
        p2.add(text);
        c.add(p2, BorderLayout.CENTER);

        setSize(500, 500);
        setVisible(true);
    }
    private class MoveLabel implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int curX = text.getX();
            int curY = text.getY();
            if (e.getActionCommand().equals("left") && curX >= 10)
                text.setLocation(curX - 10, curY);
            else if (e.getActionCommand().equals("right") && curX + 10 <= 500)
                text.setLocation(curX + 10, curY);
            if (e.getActionCommand().equals("top") && curY >= 10)
                text.setLocation(curX, curY - 10);
            if (e.getActionCommand().equals("down") && curY + 10 <= 500)
                text.setLocation(curX, curY + 10);
        }
    }
    public static void main(String[] args) {
        new LabelMoveEx();
    }
}
