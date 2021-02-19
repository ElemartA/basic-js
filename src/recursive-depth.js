const CustomError = require("../extensions/custom-error");

let checkArray = (arr) => arr.some(item => Array.isArray(item));

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let numberDepth = 1;
   if(checkArray(arr)){
     const newArr = arr.flat();
     numberDepth += this.calculateDepth(newArr)
   }
   return numberDepth;
  }
};