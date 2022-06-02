package week14;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.*;

public class ComboActionP extends JFrame{
    private final String[] subjects = {"Java", "Data Structure", "OS"};
    private final String[] phrases = {
            "Java is a 2-1 class.",
            "Data structure is a 2-1 class.",
            "OS is a 3-1 class."
    };
    private JTextArea textArea = new JTextArea(phrases[0]);
    private JComboBox<String> strCombo = new JComboBox<>(subjects);
    public ComboActionP() {
        setTitle("콤보박스 활용 예제");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        Container c = getContentPane();
        c.setLayout(new BorderLayout());
        textArea.setBorder(new EmptyBorder(10, 10, 0, 10));
        c.add(strCombo, BorderLayout.NORTH);
        c.add(textArea, BorderLayout.CENTER);
        strCombo.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JComboBox<String> cb = (JComboBox<String>) e.getSource();
                int index = cb.getSelectedIndex();
                textArea.setText(phrases[index]);
            }
        });
        setSize(300, 300);
        setVisible(true);
    }
    public static void main(String[] args) {
        new ComboActionP();
    }
}
