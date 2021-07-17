/**
 * Merging helper to simplify class construction for components
 * 
 * @param {*} variation 
 * @param {*} size 
 * @returns 
 */
const mergedStyles = (variation, size, VARIATIONS, SIZES) => {
  const output = {};
  const mergedArray = [
    ({ ...VARIATIONS.default, ...VARIATIONS[variation] }),
    (size ? {...SIZES.default, ...SIZES[size] } : { ...SIZES.default, ...SIZES[variation] })
  ];
  mergedArray.forEach((stylesObject)  => {
    Object.keys(stylesObject).forEach((key) => {
      output[key] = (output[key] || []).concat(stylesObject[key])
    })
  })

  return output;
}

export default mergedStyles;