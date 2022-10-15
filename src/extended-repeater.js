const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strArr = [];
  let addArr = [];
  let addStr = '';

  if (options.additionRepeatTimes > 1) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.hasOwnProperty('addition')) {
        addArr.push(options.addition + '')
      }
    }
    addStr = options.additionSeparator ? addArr.join(`${options.additionSeparator}`) : addArr.join(`|`);
  } else {
    options.addition ? addStr = options.addition : addStr = '';
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArr.push(str);
    }
  } else {
    return str + options.addition;
  }
  let strArrAdd = strArr.map(el => el + addStr);
  return options.separator ? strArrAdd.join(`${options.separator}`) : strArrAdd.join(`+`);
}

module.exports = {
  repeater
};
