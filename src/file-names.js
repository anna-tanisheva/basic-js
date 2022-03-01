const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  let countObj = {};
  outputArr = []
  names.forEach((elem, i) => {
    if (!countObj[elem]) {
      countObj[elem] = [1, [i]];
    } else {
      console.log(countObj[elem][1])
      countObj[elem][0] += 1;
      countObj[elem][1].push(i);
    }
  })
  for (i in countObj) {
    let count = 0;
    while (count < countObj[i][0]) {
      console.log(countObj[i][1][count])
      if (!outputArr.includes(i)) {
        outputArr.splice(countObj[i][1][count], 0, `${i}`)
      } else {
        outputArr.splice(countObj[i][1][count], 0, `${i}(${count})`)
      }
      count++;
    }
  }
  outputArr.forEach((elem, index) => {
    if (elem.indexOf('0') !== -1) {
      let exp = new RegExp('[0]')
      console.log(exp)
      elem = elem.replace(exp, '1')
      console.log(elem)
      outputArr[index] = elem
    }
  })
  return outputArr
}


module.exports = {
  renameFiles
};