package week12.ex1;

import java.awt.*;
import javax.swing.*;

public class Ex1Frame extends JFrame {
    public Ex1Frame() {
        setTitle("JComponent의 공통 메소드 예제");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container contentPane = getContentPane();
        contentPane.setLayout(new FlowLayout());

        JButton button1 = new JButton("Blue/Yellow Button");
        button1.setForeground(Color.BLUE);
        button1.setBackground(Color.YELLOW);
        JButton button2 = new JButton("Disabled Button");
        button2.setEnabled(false);
        JButton button3 = new JButton("Italic Button");
        button3.setFont(new Font("Arial", Font.ITALIC, 20));

        contentPane.add(button1);
        contentPane.add(button2);
        contentPane.add(button3);
        setSize(400, 300);
        setVisible(true);
    }
    public static void main(String[] args) {
        new Ex1Frame();
    }
}
