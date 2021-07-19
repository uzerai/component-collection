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
      'dark:bg-dark-2',
      'relative',
      'border',
      'border-smoke',
      'dark:border-dark-3',
      'rounded-sm',
      'focus-within:border',
      'focus-within:border-blue',
      'duration-100',
      'ease-in',
      'shadow-sm',
      'shadow-inner',
    ],
    input: [
      'group',
      'w-full',
      'appearance-none',
      'bg-white',
      'dark:bg-dark-2',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'dark:caret-white',
    ],
    symbol: [
      'flex',
      'justify-center',
      'items-center'
    ]
  }
}

const SIZES = {
  default: {
    body: [
      'py-2',
      'px-3'
    ],
    input: [],
    symbol: [
      'w-5',
      'h-5',
      'pr-2'
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
export const TextField = ({ id, name, placeholder, disabled, maxLength, symbol, variation, size }) => {
  const { body: bodyStyles, input: inputStyles, symbol: symbolStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ').concat(` ${disabled ? 'cursor-not-allowed' : ''}`)}>
    {/* Left-side area */}
    { 
      symbol && <div className={symbolStyles.join(' ')}>
        {
          React.cloneElement(symbol, { ...symbol.props, size: 'fitWidth' })
        }
      </div>
    } 
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
  symbol: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

TextField.defaultProps = {
  variation: 'text',
  size: 'default',
  disabled: false,
};