import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';



/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    additional: {},
    body: [
      'text-charcoal',
      'dark:text-steam',
      'text-center',
      'dark:text-white'
    ],
    number: [
      'text-xl',
      'font-effra'
    ],
    label: [
      'text-xs',
      'font-effra'
    ],
    percentile: [
      'leading-snug',
      'text-sm',
      'text-stone',
      'dark:text-slate'
    ]
  },
}

const SIZES = {
  default: {
    additional: {},
    body: [
      'px-2',
      'py-1',
    ],
    number: [],
    label: [],
    percentile: []
  },
  fullWidth: {
    body: [
      'px-2',
      'py-1',
      'w-full',
    ]
  }
}

const percentileOrdinalIndicators = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd'
}


/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * Simple example component for easy copy-paste initialization of other components.
 */
export const NumberStatistic = ({ number, label, percentile, variation, size }) => {
  const { body: bodyStyles,
    number: numberStyles,
    label: labelStyles,
    percentile: percentileStyles
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  // for discerning the ordinal indicator.
  const lastDigit = percentile?.toString().split('').pop() || null;

  return <div className={bodyStyles.join(' ')}>
    <p className={numberStyles.join(' ')}>{number}</p>
    {
      percentile && <p className={percentileStyles.join(' ')}>
      ({percentile}{percentileOrdinalIndicators[`${lastDigit}`] || 'th'} percentile)</p>
    }
    <label className={labelStyles.join(' ')}>{label}</label>
  </div>
};

NumberStatistic.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentile: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
};

NumberStatistic.defaultProps = {
  size: 'default',
};