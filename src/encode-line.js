const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let previous, counter;
  let outputArr = [];
  if (str.length === 0) {
    return ''
  };
  for (let i = 0; i < str.length; i++) {
    if (!previous) {
      previous = str[i];
      counter = 1;
      continue;
    }
    if (str[i] !== previous) {
      outputArr.push([counter, previous])
      previous = str[i];
      counter = 1;
      continue;
    }
    counter++;
  }
  outputArr.push([counter, previous])
  outputArr = outputArr.map(elem => {
    if (elem[0] === 1) {
      return elem[1]
    } else {
      return elem = elem.join('')
    }
  })
  return outputArr.join('');
}

module.exports = {
  encodeLine
};
