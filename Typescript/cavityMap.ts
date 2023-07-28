/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

const cavityMap = (grid: Array<string>): Array<string> => {
    // Write your code here
    const cavities: Array<string[]> = grid.map(item => item.split(''));

    return cavities.reduce((target: Array<string>, list: Array<string>, index: number, source: string[][]) => {
      const result: string = list
        .reduce((listTarget: Array<string>, item: string, itemIndex: number) => {
          listTarget.push(
            index >= 1 &&
              itemIndex >= 1 &&
              index < source.length - 1 &&
              itemIndex < list.length &&
              item > source[index][itemIndex - 1] &&
              item > source[index][itemIndex + 1] &&
              item > source[index - 1][itemIndex] &&
              item > source[index + 1][itemIndex]
              ? 'X'
              : item
          );
  
          return listTarget;
        }, [])
        .join('');
  
      target.push(result);
  
      return target;
    }, []);
}

let grid = ['989', '191', '111']; //[ '989', '1X1', '111' ]
console.log(cavityMap(grid));

