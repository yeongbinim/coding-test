package week13;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class DistanceConverter extends JFrame {
    JLabel lKM = new JLabel("KM");
    JLabel lMile = new JLabel("Mile");
    JTextField tfKM = new JTextField(6);
    JTextField tfMile = new JTextField(6);
    JButton btnKMtoMile = new JButton("KM->Mile");
    JButton btnMiletoKM = new JButton("Mile->KM");
    private final double KMS_PER_MILE = 1.609;

    public DistanceConverter() {
        setTitle("EX3");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(500, 100);
        Container c = getContentPane();
        btnKMtoMile.addActionListener(new ButtonAction());
        btnMiletoKM.addActionListener(new ButtonAction());
        JPanel northP = new JPanel();
        northP.setSize(500, 50);
        northP.add(lKM);
        northP.add(tfKM);
        northP.add(lMile);
        northP.add(tfMile);
        JPanel centerP = new JPanel();
        centerP.setSize(500, 50);
        centerP.add(btnKMtoMile);
        centerP.add(btnMiletoKM);
        c.add(northP, BorderLayout.NORTH);
        c.add(centerP, BorderLayout.CENTER);
        setVisible(true);
    }
    private class ButtonAction implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            JButton btnSource = (JButton)e.getSource();
            if (btnSource.equals(btnKMtoMile)) {
                double valueKM = Double.parseDouble(tfKM.getText());
                double valueMile = valueKM / KMS_PER_MILE;
                String stringMile = String.format("%.3f", valueMile);
                tfMile.setText(stringMile);
            }
            else if (btnSource.equals(btnMiletoKM)) {
                double valueMile = Double.parseDouble(tfMile.getText());
                double valueKM = valueMile * KMS_PER_MILE;
                String stringKM = String.format("%.3f", valueKM);
                tfKM.setText(stringKM);
            }
        }
    }
    public static void main(String [] args) {
        new DistanceConverter();
    }
}
