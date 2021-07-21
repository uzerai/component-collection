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
    label: [
      'relative',
      '-bottom-1',
      'text-stone',
      'text-sm',
      'font-varta',
      'select-none',
      'uppercase',
    ],
    inset: [],
    container: [
      'text-smoke',
      'dark:text-dark-3',
      'flex',
      'items-baseline'
    ],
  }
}

const SIZES = {
  default: {
    label: [
      'ml-1',
      'mr-4',
    ],
    inset: [
      'w-3'
    ],
    container: [
      'py-2'
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
export const Separator = ({ label, variation, size }) => {
  const { 
    label: labelStyles,
    inset: insetStyles,
    container: containerStyles
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={containerStyles.join(' ')}>
    {
      label && <>
        <hr className={insetStyles.join(' ')}/>
        <span className={labelStyles.join(' ')}>{label}</span>
      </>
    }
    <hr className='flex-grow' />
  </div>
};

Separator.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

Separator.defaultProps = {
  size: 'default',
};