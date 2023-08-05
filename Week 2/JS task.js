//          Task 1
function filter_list(l) {
    return l.filter((item) => typeof item !== "string");
  }
  //          Task 2
  function arrayDiff(a, b) {
    return a.filter((item) => !b.includes(item));
  }
  //          Task 3
  function list(names) {
    if (names.length > 1) {
      const lastName = names.pop();
      let str = "";
      names.map((item) => {
        str += " " + item.name + ",";
      });
      return str.slice(1, str.length - 1) + " & " + lastName.name;
    } else if (names.length == 1) {
      return names[0].name;
    }
    return "";
  }
  // console.log(list([{name:'a'},{name:'b'},{name:'c'}]))
  
  
  //          Task 4
  function presistance(num) {
      num = num.toString();
      
      if (num.length > 1) {
        let ans = 1;
        const digits = num.split('').map(Number); // Convert string to array of digits
        digits.forEach(item => {
          ans *= item;
        });
        return  1 + presistance(ans);
      }
      return 0;
  }
  // console.log(presistance(999));
  
  
  //          Task 5
  function validPIN(pin) {
      //              1st Approch
      // if(`${pin}`.length === 4  || `${pin}`.length === 6){
      //     return true
      // }
      // return false
  
      //             2nd Approch
      return pin.match(/(^[0-9]{4}$)/) !== null || pin.match(/(^[0-9]{6}$)/) !== null 
  }
  
  
  //          Task 6
  function lowerCaseCount(str) {
      return str.match(/[a-z]/g) && str.match(/[a-z]/g).length || 0
  }
  // console.log(lowerCaseCount("abc999999"));
  
  
  //          Task 7
  function checkDate(date) {
      const today=new Date()
      return (today.getDate() == date.getDate()) && (today.getMonth() == date.getMonth()) && (today.getFullYear()==date.getFullYear())
  }
  //          Task 8
  function captalize(str){
      let evenStr=''
      let oddStr=''
      for (let index = 0; index < str.length; index++) {
          const element = str[index];
          if (index%2 == 0) {
              evenStr += str[index].toUpperCase()
              oddStr += str[index].toLowerCase()
          } else {
              oddStr  += str[index].toUpperCase()
              evenStr += str[index].toLowerCase()
          }
      }
      return [evenStr,oddStr]
  }
  //          Task 9
  function maxNumber(num){
      let numbers=`${num}`.split('').map(Number).sort().reverse()
      return numbers.join("")
  }
  // console.log(maxNumber(7896))