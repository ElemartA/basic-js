const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let newArray = [];
  if(array != null){
  for (let i=0; i<array.length; i++){
    if(typeof array[i] === 'string'){
      let firstLetters = array[i].trim()[0].toUpperCase();
      newArray.push(firstLetters);
  }
}
}else{
  return false;
}
  return newArray.sort().join('');
};

