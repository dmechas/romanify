const numerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const indices = Object.keys(numerals)

/**
 * Recursively convert Arabic-Indic numerals to their Roman equivalents.
 *
 * @param  {Number} arabic Numeral between 1-3999.
 * @param  {String} acc    Accumulated output.
 * @return {String}        Converted Roman numeral.
 */
function recursiveRomanify (arabic, acc = '') {
  if (!arabic) {
    return acc
  }

  const value = Math.max.apply(null, indices.filter(i => i <= arabic))

  return recursiveRomanify(arabic - value, acc + numerals[value])
}

/**
 * Convert Arabic-Indic numerals to their Roman equivalents.
 *
 * @param  {Number} arabic Numeral between 1-3999.
 * @return {String}        Converted Roman numeral.
 */
function romanify (arabic) {
  if (arabic < 1 || arabic > 3999) {
    throw new Error('Romani ite domum.')
  }

  return recursiveRomanify(arabic)
}

export default romanify
