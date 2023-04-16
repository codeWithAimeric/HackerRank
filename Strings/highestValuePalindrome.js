/*
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */

function highestValuePalindrome(s, n, k) {
    // Write your code here
    let myArray = s.split('');
    let count = 0; 
    if(s.length == 1 && k>=1){
        myArray[0] = '9';
        return myArray.join('');
    }
    for(let i=0, j=myArray.length-1; i<s.length && j>=0; i++, j--){
        if(k == 0){
            break;
        }
        if(i>Math.floor(s.length/2)){
            break;
        }
        if(myArray[i]!= myArray[j]){
            count++;
        }
        if(count > k ){
            return '-1';
        }
        if(myArray[i] != myArray[j]){
            if(Number(myArray[i]) > Number(myArray[j])){
                myArray[j] = myArray[i];
                k--;
            }
            if(Number(myArray[j]) < Number(myArray[i])){
                myArray[i] = myArray[j];
                k--;
            }
        }
    }
    if(k == 0){
        return myArray.join('');
    }else{
        for(let i=0, j=myArray.length-1; i<s.length && j>=0; i++, j--){
            if(k <= 0){
                break;
            }
            if((k == 1) && ((myArray.length % 2) != 0)){
                let index = Math.floor(myArray.length/2);
                myArray[index] = '9';
                break; 
            }
            if(i == Math.floor(myArray.length / 2)){
                break;
            }
            if(k>=2){
                if(myArray[i] != '9' && myArray[j] != '9'){
                    myArray[i] = '9';
                    myArray[j] = '9';
                    k -= 2;
                }
            }
        }
    }
    return myArray.join('');
}

let s = '1231';
let n = 6;
let k = 3;
console.log(highestValuePalindrome(s, n, k));

// let i ; 
//  let len= s.length;
//  let myArray = s.split("");
//  let changelog=[];

// if(len === 1 && k >= 1)
//  {
//     myArray[0]=9;
//      return myArray.join("");
//  }

 
// if (!(myArray === myArray.reverse)){
//     for(i=0 ; i<n/2; i++){
    
//      if(myArray[i]!=myArray[n-i-1] ){
//          if(k>0)
//          {
//          k --;
//          if(myArray[i]>myArray[n-1-i]){
//             myArray[n-1-i]= myArray[i];
//              if(myArray[i]!= 9)
//              {
//               changelog.push(n-1-i);
//              }

//          }
//          else{
//             myArray[i]= myArray[n-i-1];
//              if(myArray[n-i-1]!=9){
//                changelog.push(i);
//              }

//          }
 
//          }

//          else{
//            return -1;
//          }
//      }

//  }

// }


//  if(k>0){

//     for (i=0;i<n/2;i++){
//         if((changelog.includes(i)||changelog.includes(n-1-i))&& (k>0)){
           
//             myArray[i]=9;
//             myArray[n-1-i]=9;
//             k = k-1;
//         }

//         if(!(changelog.includes(i)|| changelog.includes(n-1-i))|| !(changelog.length != null)){

//             if((i==Math.floor(n/2)) && (n%2==1) && k>0){
//                 let tempdata = Math.floor(n/2);
//                 myArray[tempdata] = 9;
//          }

//             if(k>1 && myArray[i]!=9)
//             {
//                 myArray[i]=9;
//                 myArray[n-1-i]=9;
//             k = k-2;
//             }
            
//         }
//     }

//     if(i===n/2 && k>0){
//         let tempdata = n/2+1;
//         myArray[tempdata] = 9;
//     }
        
// }

// return myArray.join("");