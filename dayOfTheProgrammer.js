/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    if(year>=1700 && year<=1917){
        if(year%4 == 0){
            return("12.09."+year);
        }else{
            return("13.09."+year);
        }
    }else if(year == 1918){
        return("26.09."+year);
    }else if(year > 1918){
        if(year%400==0 || (year%4 ==0 && year%100!=0)){
            return("12.09."+year);
        }else{
            return("13.09."+year);
        }
    }
}
