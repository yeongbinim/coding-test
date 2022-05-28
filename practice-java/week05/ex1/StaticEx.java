package week05.ex1;

class ArrayUtil{
    public static int[] concat(int[] arr1, int[] arr2){
        int i, j, array[];
        array = new int[arr1.length + arr2.length];

        for(i = 0; i < arr1.length; i++)
            array[i] = arr1[i];
        for(j = 0; j < arr2.length; j++)
            array[i + j] = arr2[j];
        return array;
    }
    public static void print(int[] arr){
        int i;

        System.out.print("[");
        for (i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("]");
    }
}

public class StaticEx {
    public static void main(String[] args){
        int[] array1 = {1, 5, 7, 9};
        int[] array2 = {3, 6, -1, 100, 77};
        int[] array3 = ArrayUtil.concat(array1, array2);
        ArrayUtil.print(array3);
    }
}
