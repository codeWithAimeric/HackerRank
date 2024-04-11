/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    let res = [];
    let temp = 0;
    for(let i=0; i<grades.length; i++){
        if(grades[i] < 38){
            continue;
        }else{
            temp = grades[i];
            while(temp % 5 != 0){
                temp++;
            }
            if(temp - grades[i] <3 ){
                grades.splice(i, 1, temp);
            }else{
                continue;
            }
        }
    }
    return grades;
}