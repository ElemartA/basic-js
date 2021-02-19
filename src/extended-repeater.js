const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = String(str);
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  let adding = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  let additionSeparatorLength = options.additionSeparator.length;
  let cutStr = adding.substring(0, adding.length - additionSeparatorLength);
  let newStr = (string + cutStr);
  let separatorLength = options.separator.length;
  let result = (newStr + options.separator).repeat(options.repeatTimes);
  let finishResult = result.substring(0, result.length - separatorLength);
  return finishResult;
};
