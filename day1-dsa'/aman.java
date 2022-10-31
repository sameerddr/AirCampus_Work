
import java.util.*;

class aman
{
public static void main (String args[])
{
    int a[];
    int max,pos;
Scanner sc= new Scanner (System.in);
System.out.println("Enter any number");
int n=sc.nextInt();
    {
       max=a[0];
       pos=0;
     for(int i=0; i<10; i++)
         {
            // a[i]= sc.nextInt();
           if(a[i]>max)
              {
                  max=a[i];
                  pos=i;
             }
        }
   }
System.out.println("Maximum number is " +" " +max+" " +pos);
}
}