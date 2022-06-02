package week13.practice;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

class MyActionListener implements ActionListener {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.print(e.getSource());
    }
}

public class ListenerEx extends JFrame{
    public ListenerEx() {
        setTitle("ListenerEx");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        JButton btn = new JButton("Action");
        btn.addActionListener(new MyActionListener());
        c.add(btn);
        setSize(300, 200);
        setVisible(true);
    }
    public static void main(String[] args) {
        new ListenerEx();
    }
}
