/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var res = {};
  var str = '';
  var len = strs.length;
  for (var i = 0; i < len; i++) {
    console.log('strs[i] ========', strs[i]);
    str = Array.from(strs[i]).sort().join('');
    console.log('str---------------', str);
    if (!res[str]) res[str] = [];
    res[str].push(strs[i]);
    console.log('res[str]---------------', res[str]);
  }
  console.log('res before values  = = = = =', res);
  return Object.values(res);
};


const tab = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const tab = ["", ""];
console.log(groupAnagrams(tab));