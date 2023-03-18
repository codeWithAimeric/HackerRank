/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    // Write your code here
    let tab = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen",
                "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five",
                "twenty six", "twenty seven", "twenty eight", "twenty nine"];
    let mn = '';
    let heures = '';
    let diff = 0;
    if(m ==  0){
        mn = "o' clock";
        heures = tab[h];
        return heures + " " + mn;
    }else if(m>=1 && m<30){
        mn = tab[m];
        heures = tab[h];
        if(m == 1){
            return mn + " " + "minute" + " past " + heures;
        }else if(m == 15){
            return mn + " past " + heures; 
        }else{
            return mn + " minutes " + "past " + heures;
        }
    }else if(m == 30){
        heures = tab[h];
        return "half past " + heures;
    }else if(m>30 && m<60){
        heures = tab[h+1];
        if(m == 45){
            return "quarter to" + " " + heures;
        }else{
            diff = 60 - m;
            mn = tab[diff];
            return mn + " " + "minutes to" + " " + heures;
        }
    }
}

let h= 3;
let m = 30;
console.log(timeInWords(h, m));