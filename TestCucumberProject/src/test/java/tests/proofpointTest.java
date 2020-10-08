package tests;

public class proofpointTest {

    public static void main(String[] args) {
        printFibonacciRow(10);
    }

    public static void printFibonacciRow (int n){
        int num1 = 0;
        int num2 = 1;
        System.out.println("These are Fibonacci numbers: ");
        for (int i=0; i<n;i++){
            System.out.print(num1 + " - ");
            int sum = num1+num2;
            num1 = num2;
            num2 = sum;
        }
    }
}
