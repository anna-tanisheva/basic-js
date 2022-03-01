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
  function chunkRepeater(string, chunkOptions) {
    let output = '';
    while (chunkOptions.repeatTimes > 0) {
      if (chunkOptions.repeatTimes > 1) {
        output += string + chunkOptions.separator
      } else {
        output += string
      }
      chunkOptions.repeatTimes--
    }
    return output
  }
  let outputStr = ''
  str = String(str);
  let additionProcessed;
  if ('addition' in options) {
    options.addition = String(options.addition)
    if (!options.additionSeparator) {
      options.additionSeparator = `|`
    }
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1
    }
    let additionOptions = {
      separator: options.additionSeparator,
      repeatTimes: options.additionRepeatTimes,
    }
    additionProcessed = chunkRepeater(options.addition, additionOptions)
  }
  console.log(additionProcessed)
  if (!options.separator) {
    options.separator = `+`
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  while (options.repeatTimes > 0) {
    if (options.repeatTimes > 1) {
      if (additionProcessed) {
        outputStr += str + additionProcessed + options.separator
      } else {
        outputStr += str + options.separator
      }
    } else {
      if (additionProcessed) {
        outputStr += str + additionProcessed
      } else {
        outputStr += str
      }
    }
    options.repeatTimes--
  }
  return outputStr
}

module.exports = {
  repeater
};