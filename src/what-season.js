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

let seasons = ['winter', 'spring', 'summer', 'fall', 'winter'];

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }

  let month = date.getMonth();

  return seasons[parseInt((month + 1) / 3)];
}

module.exports = {
  getSeason
};
