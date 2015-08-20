'use strict'

var list = require('./list')
/**
 * Get the reverse (retrograde) of a list
 *
 * @param {String|Array|Integer} list - the list to be reversed
 * @return The reversed list
 *
 * @example
 * reverse('A B C') // => ['C', 'B', 'A']
 */
function reverse (forward) {
  return list(forward).concat().reverse()
}

module.exports = reverse