/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let tempRes = 0;
    for(let i=0; i<tokens.length; i++){
        if(!isNaN(tokens[i])){
            stack.push(tokens[i]);
        }else{
            let tempVal2 = stack.pop();
            let tempVal1 = stack.pop();
            switch (tokens[i]) {
                case "*":
                    tempRes = Number(tempVal1) * Number(tempVal2);
                    stack.push(tempRes);
                    break;
                case "+":
                    tempRes = Number(tempVal1) + Number(tempVal2);
                    stack.push(tempRes);
                    break;
                case "-":
                    tempRes = Number(tempVal1) - Number(tempVal2);
                    stack.push(tempRes);
                    break;
                case "/":
                    tempRes = parseInt(tempVal1 / tempVal2);
                    stack.push(tempRes);
                    break;
                default:
                    break;
            }
        }
    }
    return Math.floor(stack[0]); 
};

// let tokens = ["2","1","+","3","*"];
let tokens = ["4","13","5","/","+"]; //6
console.log(evalRPN(tokens));
