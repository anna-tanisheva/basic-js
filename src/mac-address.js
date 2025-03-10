const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let matchesCounter = 0;
  let exp = new RegExp(`[A-F0-9]`)
  n.split('').forEach(e => {
    if (e === '-' || e.match(exp)) {
      matchesCounter += 1
    }
  })
  return (matchesCounter === 17) ? true : false
}
module.exports = {
  isMAC48Address
};
