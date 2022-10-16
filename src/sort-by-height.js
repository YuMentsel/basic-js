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
  let newArr = arr.filter(el => el !== -1).sort((a, b) => a - b);
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) pos.push(i);
  }
  for (let i = 0; i < pos.length; i++) {
    newArr.splice(pos[i], 0, -1);
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
