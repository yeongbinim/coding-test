package week13.ex1;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class BackgroundColorEx extends JFrame {
    private final JButton red = new JButton("red");
    private final JButton blue = new JButton("blue");
    private final JButton green = new JButton("green");
    public BackgroundColorEx() {
        setTitle("EX1");
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        Container c = getContentPane();
        c.setLayout(new BorderLayout());
        c.setBackground(Color.CYAN);

        JPanel p = new JPanel();
        ButtonAction b = new ButtonAction();
        red.addActionListener(b);
        blue.addActionListener(b);
        green.addActionListener(b);
        p.add(red); p.add(blue); p.add(green);
        p.setBackground(Color.GRAY);
        c.add(p, BorderLayout.NORTH);


        setSize(500, 500);
        setVisible(true);
    }
    private class ButtonAction implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            Container c = getContentPane();
            if (e.getActionCommand().equals("red"))
                c.setBackground(Color.RED);
            else if (e.getActionCommand().equals("blue"))
                c.setBackground(Color.BLUE);
            else if (e.getActionCommand().equals("green"))
                c.setBackground(Color.GREEN);
        }
    }
    public static void main(String[] args) {
        new BackgroundColorEx();
    }
}
