public class Main
{
   public static void main(String[] args)
   {
     int num=153;
     int count=0;
     String str=""+num;
     for(int i=0;i<str.length();i++)
     {
        int sum=str.charAt(i)-'0';
        count+=java.lang.Math.pow(sum,str.length());
     }
     if(num==count)
     {
        System.out.println(num +"  " + "is armstrong");
     }
     else
     {
         System.out.println(num + "  " + "is not armstrong");
     }
   }
}
