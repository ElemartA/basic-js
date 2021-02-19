const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string'
    || sampleActivity === 'no-value') return false;
  let sampleActivityNumber = parseFloat(sampleActivity);
  if (sampleActivityNumber > MODERN_ACTIVITY
    || isNaN(sampleActivityNumber)
    || sampleActivityNumber === 0
    || sampleActivityNumber < 0) return false;

  const k = Math.LN2 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);

};
