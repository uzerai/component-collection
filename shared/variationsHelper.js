/* eslint-disable */

/**
 * Helper to simplify style class construction for classes which implement
 * the VARIATIONS / SIZES pattern.
 * 
 * Achieves this by dynamically merging the SIZES and VARIATIONS defined
 * classes for the size/variation supplied as arguments.
 * 
 * @param {*} variation 
 * @param {*} size 
 * @returns 
 */
export const generateStyles = (variation, size, variations, sizes) => {
  if (!variations?.default) throw 'VARIATIONS not accessible. Does it have a \'default\' object?'
  if (!sizes?.default) throw 'SIZES not accessible. Does it have a \'default\' object?'

  const output = {};
  const mergedArray = [
    ({ ...variations.default, ...variations[variation] }),
    (size ? {...sizes.default, ...sizes[size] } : { ...sizes.default, ...sizes[variation] })
  ];

  mergedArray.forEach((stylesObject)  => {
    Object.keys(stylesObject).forEach((key) => {
      output[key] = (output[key] || []).concat(stylesObject[key])
    })
  })

  return output;
}

/* eslint-enable */
