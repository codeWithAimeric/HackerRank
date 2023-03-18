/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    // Write your code here
    let result = true;

    let { row, col } = container.reduce(
      (target, items, index) => {
        items.reduce((itemTarget, item, subIndex) => {
            console.log('item ===', item);
          target["row"][index] += item;
          target["col"][subIndex] += item;
            console.log('target ------------', target);
          return itemTarget;
        }, []);
  
        return target;
      },
      {
        row: new Array(container.length).fill(0),
        col: new Array(container.length).fill(0)
      }
    );

    row.sort();
    col.sort();
  
    console.log('row = = = = =', row);
    console.log('col= = = = =', col);

    for(let value of Array.from(
      { length: container.length },
      (value, index) => index
    )) {
        console.log('row[value]-------------', row[value]);
        console.log('col[value]-------------', col[value]);

      if (row[value] !== col[value]) {
        result = false;
        break;
      }
    }
  
    return result ? "Possible" : "Impossible";
}

// let container = [[1, 1], [1, 1]];
let container = [[0, 2, 1], [1, 1, 1], [2, 0, 0]]; //Possible
console.log(organizingContainers(container));

