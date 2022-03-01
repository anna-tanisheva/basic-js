const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nToArr = String(n).split('');
  let arrOfOptions = [];
  nToArr.forEach((elem, index) => {
    let copy = [...nToArr]
    copy.splice(index, 1);
    arrOfOptions.push(copy.join(''))
  })
  return Math.max.apply(null, arrOfOptions)
}

module.exports = {
  deleteDigit
};
