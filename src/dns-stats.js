const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let output = {}
  let arrOfDomains = []
  domains.forEach((elem) => {
    arrOfDomains.push(elem.split('.'))
  })
  function getKeys(arr) {
    let keys = []
    arr.map((elem, index) => {
      let iterator = index;
      let key = []
      while (iterator < arr.length) {
        key.push(`.${arr[iterator]}`)
        iterator++
      }
      keys.push(key.reverse().join(''))
    })
    return keys
  }
  let keys = []
  arrOfDomains.forEach(elem => {
    keys.push(getKeys(elem))
  })
  keys = [].concat.apply([], keys);
  keys.forEach(key => {
    if (Object.keys(output).indexOf(key) === -1) {
      output[key] = 1
    } else {
      output[key] += 1
    }
  })
  return output
}

module.exports = {
  getDNSStats
};
