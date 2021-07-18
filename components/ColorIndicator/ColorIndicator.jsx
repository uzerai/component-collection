import PropTypes from 'prop-types';
import { React } from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern. 
import { generateStyles } from '../../shared/variationsHelper';



/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  body: [
    'rounded-full',
    'inline-block'
  ]
}

export const VARIATIONS = {
  default: {
    body: [
      ...COMMON.body, 
      'bg-slate'
    ]
  },
  red: {
    body: [
      ...COMMON.body, 
      'bg-red'
    ]
  },
  yellow: {
    body: [
      ...COMMON.body, 
      'bg-yellow'
    ]
  },
  green: {
    body: [
      ...COMMON.body, 
      'bg-green'
    ]
  }
}

const SIZES = {
  default: {
    body: [
      'w-2',
      'h-2'
    ]
  }
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default button which comes in a number of variations.
 */
export const ColorIndicator = ({ variation, size }) => {
  const { body: bodyStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')} />
};

ColorIndicator.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

ColorIndicator.defaultProps = {
  size: 'default',
};