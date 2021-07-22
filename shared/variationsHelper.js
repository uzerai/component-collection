/* eslint-disable */

/** 
 * The key for an additional config object which is an object containing _additional_ configuration
 * for the VARIATION/SIZE. 
 * 
 * This can be anything from additional props to pass to a 
 * child component or another set of VARIATIONS/SIZES entirely.
 * 
 */ 
const ADDITIONAL_CONFIG_KEY = 'additional';

/**
 * Helper to simplify style class construction for classes which implement
 * the VARIATIONS / SIZES pattern.
 * 
 * Achieves this by dynamically merging the SIZES and VARIATIONS defined
 * classes for the size/variation supplied as arguments.
 * 
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
      if (key === ADDITIONAL_CONFIG_KEY) {
        output[ADDITIONAL_CONFIG_KEY] = { ...output[ADDITIONAL_CONFIG_KEY], ...stylesObject[key]}
      } else {
        output[key] = (output[key] || []).concat(stylesObject[key])
      }
    })
  })

  return output;
}

/* eslint-enable */
