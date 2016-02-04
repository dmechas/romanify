const numerals = {
  1:    'I',
  4:    'IV',
  5:    'V',
  9:    'IX',
  10:   'X',
  40:   'XL',
  50:   'L',
  90:   'XC',
  100:  'C',
  400:  'CD',
  500:  'D',
  900:  'CM',
  1000: 'M',
}

const indices = Object.keys(numerals)

/**
 * [romanify description]
 * @param  {[type]} arabic [description]
 * @param  {String} acc    [description]
 * @return {[type]}        [description]
 */
function recursiveRomanify(arabic, acc) {
  if (!arabic) {
    return acc
  }

  const value = Math.max.apply(null, indices.filter(i => i <= arabic))

  return recursiveRomanify(arabic - value, acc + numerals[value])
}

/**
 * [romanify description]
 * @param  {[type]} arabic [description]
 * @return {[type]}        [description]
 */
function romanify(arabic) {
  if (arabic < 1 || arabic > 3999) {
    throw new Error('Romani ite domum.')
  }

  return recursiveRomanify(arabic, '')
}

export default romanify
