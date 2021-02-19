const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsSpeedInSecond = turnsSpeed/3600;
  const turns = (2**disksNumber) - 1;
  const numberOfSeconds = Math.floor(turns/turnsSpeedInSecond);
  return {
    turns: turns,
    seconds: numberOfSeconds
  }
};
