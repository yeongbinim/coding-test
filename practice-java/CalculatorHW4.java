import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Arrays;
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.text.DecimalFormat;

public class CalculatorHW4 extends JFrame {
    private JLabel operateLabel;
    private JLabel resultLabel;
    public CalculatorHW4() {
        setTitle("12161219 임영빈");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container c = getContentPane();
        c.setLayout(new BorderLayout(5, 5));
        c.setBackground(Color.LIGHT_GRAY);

        NorthPanel nP = new NorthPanel();
        CenterPanel cP = new CenterPanel();

        c.add(nP, BorderLayout.NORTH);
        c.add(cP, BorderLayout.CENTER);

        setSize(450,600);
        setVisible(true);
        c.setFocusable(true);
        c.requestFocus();
    }
    class NorthPanel extends JPanel {
        public NorthPanel() {
            setLayout(new GridLayout(2, 1));
            setBackground(Color.LIGHT_GRAY);
            operateLabel = new JLabel(" ");
            resultLabel = new JLabel(" ");
            operateLabel.setBorder(new EmptyBorder(10, 10, 10, 10));
            resultLabel.setBorder(new EmptyBorder(10, 10, 10, 10));
            operateLabel.setFont(new Font("맑은 고딕", Font.BOLD , 25));
            resultLabel.setFont(new Font("맑은 고딕", Font.BOLD , 35));
            operateLabel.setForeground(Color.GRAY);
            resultLabel.setForeground(Color.BLACK);
            add(operateLabel);
            add(resultLabel);
        }
    }
    class CenterPanel extends JPanel {
        private Container ct = getContentPane();
        private String specialChar = ". √";
        private void emptyLabel(boolean flag) {
            String resLabel = resultLabel.getText();
            if (!resLabel.equals(" ")) {
                if (flag)
                    operateLabel.setText(resLabel);
                else
                    operateLabel.setText(" ");
            }
            resultLabel.setText(" ");
        }
        private String getLastStr(String str) {
            String[] strList = str.trim().split(" ");
            return (strList[strList.length - 1]);
        }
        private char getLastChar(String str) {
            return (str.charAt(str.length() -1));
        }
        public CenterPanel() {
            int i;
            setLayout(new GridLayout(5,4,1,1));
            setBackground(Color.DARK_GRAY);
            JButton numBtn[] = new JButton[9];
            JButton opBtn[] = new JButton[4];
            JButton clrBtn[] = new JButton[2];
            JButton dotBtn = new JButton(".");
            JButton zeroBtn[] = new JButton[2];
            JButton sqrtBtn = new JButton("√");
            JButton rBtn = new JButton("=");

            //이벤트 등록
            ActionListener numL = new NumberListener();
            for (i = 0; i < 9; i++) {
                numBtn[i] = new JButton(Integer.toString(i + 1));
                numBtn[i].addActionListener(numL);
            }

            opBtn[0] = new JButton("/"); opBtn[1] = new JButton("x");opBtn[2] = new JButton("+"); opBtn[3] = new JButton("-");
            ActionListener opL = new OperatorListener();
            for (i = 0; i < 4; i++) opBtn[i].addActionListener(opL);

            clrBtn[0] = new JButton("DEL"); clrBtn[1] = new JButton("CE");
            ActionListener clrL = new ClearListener();
            for (i = 0; i < 2; i++) clrBtn[i].addActionListener(clrL);

            zeroBtn[0] = new JButton("0"); zeroBtn[1] = new JButton("00");
            ActionListener zeroL = new ZeroListener();
            for (i = 0; i < 2; i++) zeroBtn[i].addActionListener(zeroL);

            dotBtn.addActionListener(new DotListener());
            sqrtBtn.addActionListener(new SqrtListener());
            rBtn.addActionListener(new ResultListener());

            //Panel에 추가
            add(clrBtn[0]);
            add(clrBtn[1]);
            add(sqrtBtn);
            add(opBtn[0]);
            for(i = 0; i < 3; i++) add(numBtn[i]);
            add(opBtn[1]);
            for(i = 3; i < 6; i++) add(numBtn[i]);
            add(opBtn[2]);
            for(i = 6; i < 9; i++) add(numBtn[i]);
            add(opBtn[3]);
            add(zeroBtn[1]);
            add(zeroBtn[0]);
            add(dotBtn);
            add(rBtn);

            //key이벤트 버튼이벤트와 연동
            ct.addKeyListener(new KeyAdapter() {
                @Override
                public void keyPressed(KeyEvent e) {
                    int keyCode = e.getKeyCode();
                    if (e.getModifiers() == 1) { //Shift눌렸는지 확인
                        if (KeyEvent.VK_EQUALS == keyCode)
                            opBtn[2].doClick();
                        else if (KeyEvent.VK_8 == keyCode)
                            opBtn[1].doClick();
                    }
                    else if (KeyEvent.VK_1 <= keyCode && keyCode <= KeyEvent.VK_9)
                        numBtn[keyCode - KeyEvent.VK_1].doClick();
                    else if (KeyEvent.VK_0 == keyCode)
                        zeroBtn[0].doClick();
                    else if (KeyEvent.VK_BACK_SPACE == keyCode)
                        clrBtn[0].doClick();
                    else if (KeyEvent.VK_SLASH == keyCode)
                        opBtn[0].doClick();
                    else if (KeyEvent.VK_ASTERISK == keyCode)
                        opBtn[1].doClick();
                    else if (KeyEvent.VK_PLUS == keyCode)
                        opBtn[2].doClick();
                    else if (KeyEvent.VK_MINUS == keyCode)
                        opBtn[3].doClick();
                    else if (KeyEvent.VK_EQUALS == keyCode || KeyEvent.VK_ENTER == keyCode) //enter혹은 =일때
                        rBtn.doClick();
                    else if (KeyEvent.VK_PERIOD == keyCode)
                        dotBtn.doClick();
                }
            });
        }
        private class SqrtListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(false);
                String curLabel = operateLabel.getText();

                char lastChar = getLastChar(curLabel);
                if (lastChar == ' ' || curLabel.length() == 0)
                    operateLabel.setText(curLabel + "√");
                ct.requestFocus();
            }
        }
        private class DotListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(true);
                String curLabel = operateLabel.getText();
                char lastChar = getLastChar(curLabel);
                String lastStr = getLastStr(curLabel);

                if (48 <= lastChar && lastChar <= 57) { //마지막 문자가 숫자고
                    if (lastStr.indexOf(".") < 0) //마지막 문자열에 .이 한번도 없을 때
                        operateLabel.setText(curLabel + ".");
                }
                ct.requestFocus();
            }
        }
        private class ZeroListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(false);
                JButton btn = (JButton) e.getSource();
                String btnStr = btn.getText();
                String curLabel = operateLabel.getText();
                char lastChar = getLastChar(curLabel);
                String lastStr = getLastStr(curLabel);

                if ((49 <= lastChar && lastChar <= 57) || lastStr.length() > 1) { //마지막 문자가 1~9이거나, 마지막 숫자의 길이가 2이상일때
                    operateLabel.setText(curLabel + btnStr + "");
                } else if (specialChar.indexOf(lastChar) > 0) { //앞에 special기호가 있다면 0만 쓰기
                    operateLabel.setText(curLabel + "0");
                }

                ct.requestFocus();
            }
        }
        private class NumberListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(false);
                String curLabel = operateLabel.getText();
                JButton btn = (JButton) e.getSource();
                String btnStr = btn.getText();
                String lastStr = getLastStr(curLabel);

                if (lastStr.length() == 1 && lastStr.charAt(0) == '0')
                    operateLabel.setText(curLabel.substring(0, curLabel.length() - 1) + btnStr);
                else
                    operateLabel.setText(curLabel + btnStr + "");

                ct.requestFocus();
            }
        }
        private class ClearListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(false);

                String curLabel = operateLabel.getText();
                JButton btn = (JButton) e.getSource();
                String btnStr = btn.getText();
                char lastChar = getLastChar(curLabel);

                if (btnStr.equals("DEL")) {
                    if (curLabel.length() > 2) {
                        if (lastChar != ' ')
                            operateLabel.setText(curLabel.substring(0, curLabel.length() - 1));
                        else
                            operateLabel.setText(curLabel.substring(0, curLabel.length() - 3));
                    } else if (curLabel.length() == 2)
                        operateLabel.setText(curLabel.substring(0, curLabel.length() - 1));
                } else if (btnStr.equals("CE"))
                    operateLabel.setText(" ");

                ct.requestFocus();
            }
        }
        private class OperatorListener implements ActionListener {
            @Override
            public void actionPerformed(ActionEvent e) {
                emptyLabel(true);
                JButton btn = (JButton) e.getSource();
                String btnStr = btn.getText();
                String curLabel = operateLabel.getText();
                char lastChar = getLastChar(curLabel);

                if (48 <= lastChar && lastChar <= 57)
                    operateLabel.setText(curLabel + " " + btnStr + " ");

                ct.requestFocus();
            }
        }
        private class ResultListener implements ActionListener {
            DecimalFormat df = new DecimalFormat("#.############");
            private double returnDouble(String str) {
                if (str.charAt(0) == '√')
                    return (Math.sqrt(Double.parseDouble(str.substring(1))));
                else
                    return (Double.parseDouble(str));
            }
            private double operate(String[] strList) {
                int i;
                double res;
                ArrayList<String> strTable = new ArrayList<String>(Arrays.asList(strList));

                for (i = strTable.size() - 1; i >= 0; i --) {
                    String curStr = strTable.get(i);
                    if (curStr.equals("/") || curStr.equals("x")){
                        if (curStr.equals("/"))
                            res = returnDouble(strTable.get(i - 1)) / returnDouble(strTable.get(i + 1));
                        else
                            res = returnDouble(strTable.get(i - 1)) * returnDouble(strTable.get(i + 1));
                        strTable.remove(i + 1);
                        strTable.remove(i);
                        strTable.remove(i - 1);
                        strTable.add(i - 1, Double.toString(res));
                        i -= 2;
                    }
                }
                for (i = 0; i < strTable.size(); i ++) {
                    String curStr = strTable.get(i);
                    if (curStr.equals("+") || curStr.equals("-")){
                        if (curStr.equals("+"))
                            res = returnDouble(strTable.get(i - 1)) + returnDouble(strTable.get(i + 1));
                        else
                            res = returnDouble(strTable.get(i - 1)) - returnDouble(strTable.get(i + 1));
                        strTable.remove(i + 1);
                        strTable.remove(i);
                        strTable.remove(i - 1);
                        strTable.add(i - 1, Double.toString(res));
                        i -= 2;
                    }
                }
                return returnDouble(strTable.get(0));
            }
            @Override
            public void actionPerformed(ActionEvent e) {
                String label = operateLabel.getText();
                char c = label.charAt(label.length() -1);
                if (48 <= c && c <= 57) { //마지막이 연산자가 아닐때
                    String[] strList = label.trim().split(" ");
                    if (strList.length > 0)
                        resultLabel.setText(" " + df.format(operate(strList)));
                }
                ct.requestFocus();
            }
        }
    }
    public static void main(String[] args) {
        new CalculatorHW4();
    }
}
