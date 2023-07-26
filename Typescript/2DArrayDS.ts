const hourglassSum = (arr: number[][]): number => {
    // Write your code here
    let resTab: Array<number> = [];
    let sum: number = 0;
    for(let i=0; i<=arr.length -3; i++){
        for(let j=0; j<=arr.length -3; j++){
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j]+ arr[i+2][j+1] + arr[i+2][j+2];
            resTab.push(sum);
        }
    }
    return Math.max(...resTab);
}

let tab = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(tab));
