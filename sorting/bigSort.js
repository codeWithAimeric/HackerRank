/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */
function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
function bigSorting(unsorted) {
    // Write your code here
    const resTabBig = unsorted.map((element) => BigInt(element));
    const resTab = resTabBig.sort(compare);
    return resTab.map(element => element.toString());
}
let tab = ["1", "200", '31415926535897932384626433832795', "3"];
console.log(bigSorting(tab));