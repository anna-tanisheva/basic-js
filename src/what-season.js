const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function MyError(message) {
  this.name = 'MyError';
  this.message = message || `Invalid date!`;
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new MyError(`Invalid date!`)
  } else {
    let month = date.getMonth() + 1;
    if (month === 1 || month === 2 || month === 12) {
      return 'winter';
    } else if (month === 3 || month === 4 || month === 5) {
      return 'spring';
    } else if (month === 6 || month === 7 || month === 8) {
      return 'summer';
    } else if (month === 9 || month === 10 || month === 11) {
      return 'fall';
    }
  }
}

module.exports = {
  getSeason
};
