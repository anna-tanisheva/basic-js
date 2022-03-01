const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  console.log(arr)
  let indArr = [];
  arr.forEach((elem, ind) => {
    if (elem === -1) {
      indArr.push(ind);
    }
  })
  let i = arr.length;
  while (i--) {
    if (arr[i] === -1) {
      arr.splice(i, 1)
    }
  }
  arr.sort((a, b) => {
    return a - b
  })
  indArr.forEach(elem => {
    arr.splice(elem, 0, -1)
  })
  return arr
}

module.exports = {
  sortByHeight
};
