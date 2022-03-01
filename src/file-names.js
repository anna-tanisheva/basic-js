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
  oninputArr = []
  names.forEach(elem => {
    if (!countObj[elem]) {
      countObj[elem] = 1;
    } else {
      countObj[elem] += 1
    }
  })
  for (i in countObj) {
    console.log(i)
    while (countObj[i] > 0) {
      oninputArr.push(`${i}(${countObj[i]})`)
      countObj[i]--
    }
  }
  console.log(oninputArr)
}


module.exports = {
  renameFiles
};
// let countObj = {};
// names.forEach(elem => {
//   if (!countObj[elem]) {
//     countObj[elem] = 1;
//   } else {
//     countObj[elem] += 1
//   }
// })
// let keys = Object.keys(countObj);

// console.log(keys)
// keys.forEach(key => {
//   let i = 0
//   while (i < countObj[key]) {
//     // console.log(key)
//     if (!outputArr.includes(key)) {
//       outputArr.push(`${key}`)
//     } else {
//       outputArr.push(`${key}(${i})`)
//     }
//     i++;
//   }
// })
// outputArr.forEach((elem, index) => {
//   if (elem.indexOf('0') !== -1) {
//     let exp = new RegExp('[0]')
//     console.log(exp)
//     elem = elem.replace(exp, '1')
//     console.log(elem)
//     outputArr[index] = elem
//   }
// })
// // outputArr.sort(function (a, b) {
// //   return names.indexOf(a) - names.indexOf(b);
// // });

// let countObj = {};
// let outputArr = [];
// names.forEach(elem => {
//   let k = 1;
//   if (!countObj[elem]) {
//     countObj[elem] = 1;
//   } else {
//     console.log(elem, k);
//     // let newElem =
//     countObj[`${elem}(${k + 1})`] = 1;
//     k += 1
//   }
// })
// names.forEach((elem) => {

//   if (!outputArr.includes(elem)) {
//     outputArr.push(elem)
//   } else {
//     // let i = 1;
//     // while (i < countObj[elem]) {
//     //   // console.log(key)
//     //   outputArr.push(`${elem}(${i})`)
//     //   i++;
//     // }
//   }
// })
// console.log(countObj, outputArr);
// return outputArr