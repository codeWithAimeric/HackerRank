function timeConversion(s) {
  // Write your code here
  let myTab = {'01':'13', '02':'14', '03':'15', '04':'16', '05':'17', '06':'18', '07':'19',
       '08':'20', '09':'21', '10':'22', '11':'23', '12':'12'};
  if(s == '12:00:00AM'){
      return '00:00:00';
  }
  if(s == '12:00:00PM'){
      return '12:00:00';
  }
  if(s[8] == 'A'){
      if(s[0] == '1' && s[1] == '2'){
          let arrA = s.split('');
          arrA[0] = '0';
          arrA[1] = '0';
          arrA.splice(8, 2);
          let resA = arrA.join('');
          return resA;
      }else{
          let arrA = s.split('');
          arrA.splice(8, 2);
          let resA = arrA.join('');
          return resA;
      }
  }else{
      let arr = s.split('');
      let hour = s.split('').splice(0, 2).join('');
      let newHour = myTab[hour].toString();
      arr.splice(0, 2);
      arr.splice(6, 2);
      let stringArr = arr.join('');
      return newHour + stringArr;
  }
}