const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  } else if (arr.length === 0) {
    return arr
  } else {
    let outputArr = [...arr];
    outputArr.forEach((el, index) => {
      if (el === `--discard-next` && outputArr[index + 1]) {
        outputArr.splice(index, 2)
      } else if (el === `--discard-prev` && outputArr[index - 1]) {
        outputArr.splice(index - 1, 2)
      } else if (el === `--double-next` && outputArr[index + 1]) {
        outputArr.splice(index, 1, outputArr[index + 1])
      } else if (el === `--double-prev` && outputArr[index - 1]) {
        outputArr.splice(index, 1, outputArr[index - 1])
      }
    })
    outputArr.forEach((el, i) => {
      if (el === `--discard-next` || el === `--discard-prev` || el === `--double-next` || el === `--double-prev`) {
        outputArr.splice(i, 1)
      }
    })
    return outputArr
  }
}

module.exports = {
  transform
};
