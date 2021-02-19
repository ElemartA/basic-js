const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrN = [...arr]
  if (arrN === []) return [];

  if (!Array.isArray(arrN)) {
    throw new Error('error')
  }
  for (let i = 0; i < arrN.length; i++) {
    switch (arrN[i]) {
      case '--discard-next':

        if (i === arrN.length - 1) {
          arrN.splice(i, 1);
          break;
        }
        else if (arrN[i + 2] === '--discard-prev' || arrN[i + 2] === '--double-prev') {
          arrN.splice(i, 3);
          break;
        }
        arrN.splice(i, 2);
        i = i - 1;
        break;
      case '--discard-prev':
        if (i === 0) {
          arrN.splice(i, 1);
          break;
        }
        arrN.splice(i - 1, 2);
        i = i - 1;
        break;
      case '--double-next':
        if (i < arrN.length - 1) {
          arrN.splice(i, 1, arrN[i + 1]);
          break;
        } else if (i === arrN.length - 1) {
          arrN.splice(i, 1);
          break;
        }
      case '--double-prev':
        if (i === 0) {
          arrN.splice(i, 1);
          break;
        } else if (i > 0) {
          arrN.splice(i, 1, arrN[i - 1]);
          break;
        }
    }
  } return arrN;
};
