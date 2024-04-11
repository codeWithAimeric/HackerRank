function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let resApples = apples.map(element => element+a);
    let resOranges = oranges.map(element => element+b);
    const countApple = resApples.filter(apple => apple >= s && apple <= t).length;
    const countOrange = resOranges.filter(orange => orange >= s && orange <= t).length;

    console.log(countApple);
    console.log(countOrange);
}


let apples = [2, 3, -4];
let oranges = [3, -2, -4];
let s = 7;
let t  = 10;
let a = 4;
let b = 12;

countApplesAndOranges(s, t, a, b, apples, oranges);