public class Main
{
  public static void main(String[] args)
  {
     int num=3;
     int count=0;
     System.out.println(primeOrNot(num,count));
  }
  public static boolean primeOrNot(int num,int count)
  {
     if(num==0 || num==1)
     {
        return false;
     }
     for(int i=1;i<=num;i++)
     {
        if(num%i==0)
        {
           count++;
        }
     }
     if(count==2)
     {
        return true;
     }
     else
     {
        return false;
     }
  }
}
     
