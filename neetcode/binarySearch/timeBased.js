var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map[key]) {
        this.map[key].push([timestamp, value]);
    }else{
        this.map[key] = [[timestamp, value]];
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) {
        return '';
      }
      let low = 0;
      let high = this.map[key].length - 1;
      let result = '';
      while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const currentStamp = this.map[key][middle][0];
        const currentValue = this.map[key][middle][1];
        if(currentStamp === timestamp) {
          result = currentValue;
          break;
        }else if(currentStamp < timestamp) {
          result = currentValue;
          low = middle + 1;
        }else{
          high = middle - 1;
        }
      }
      return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */