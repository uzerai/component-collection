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
    body: [
      'flex',
      'items-baseline',
      'bg-white',
      'relative',
      'border',
      'border-smoke',
      'rounded-sm',
      'focus-within:border',
      'focus-within:border-blue',
      'duration-100',
      'ease-in',
      'shadow-sm',
      'shadow-inner',
      'py-2',
      'px-4'
    ],
    input: [
      'group',
      'w-full',
      'appearance-none',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'disabled:bg-white',
    ]
  }
}

const SIZES = {
  default: {
    body: [],
    input: [],
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
export const TextField = ({ id, name, placeholder, disabled, maxLength, variation, size }) => {
  const { body: bodyStyles, input: inputStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')}>
    {/* Left-side area */}
    <div className={''}>
      <span>Thing</span>
    </div>
    <input 
      name={name} 
      placeholder={placeholder} 
      type="text" 
      id={id}
      disabled={disabled}
      className={inputStyles.join(' ')} />
    {
      maxLength ? <div className={''}></div> : null
    }
  </div>
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

TextField.defaultProps = {
  variation: 'text',
  size: 'default',
  disabled: false,
};