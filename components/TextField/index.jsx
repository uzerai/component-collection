import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
      'rounded',
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
      'text-charcoal',
      'bg-white',
      'dark:bg-dark-2',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'dark:caret-white',
      'dark:text-smoke'
    ],
    symbol: [
      'flex',
      'justify-center',
      'items-center'
    ],
    count: [
      'select-none',
      'font-effra',
      'border-l',
      'border-smoke',
      'pl-3',
      'text-charcoal',
      'dark:border-dark-3',
      'dark:text-stone',
    ]
  }
}

const SIZES = {
  default: {
    body: ['py-2','px-3'],
    input: [],
    symbol: [
      'w-7',
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
 * The main user-input component, with optionally enabled left-side symbols, or a right-side character count for the field's current value.
 */
export const TextField = ({ id, name, value, onChange, placeholder, disabled, maxLength, symbol, variation, size }) => {
  const [ textValue, setTextValue ] = useState(value);
  const { 
    body: bodyStyles, 
    input: inputStyles,
    symbol: symbolStyles,
    count: countStyles
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  // Styles added to the main wrapper when `disabled == true`
  // The space preceding these conditional classes is to avoid class-mashing.
  const disabledStyles = `${disabled ? ' cursor-not-allowed' : ''}`;
  // Styles added to the main wrapper when the maxlength is defined.
  const overLimitStyles = `${textValue.length > maxLength ? 
    ' !border-red-light dark:!border-red focus-within:!border-red-dark dark:focus-within:!border-red-dark' : ''}`

  return <div className={bodyStyles.join(' ').concat(disabledStyles).concat(overLimitStyles)}>
    {/* Left-side area */}
    { 
      symbol && <div className={symbolStyles.join(' ')}>
        {
          React.cloneElement(symbol, { ...symbol.props, size: 'fitHeight' })
        }
      </div>
    } 
    <input 
      name={name} 
      placeholder={placeholder} 
      type="text" 
      id={id}
      disabled={disabled}
      className={inputStyles.join(' ')}
      onChange={(event) => {
        if (maxLength && (event.target.value.length > maxLength)) {
          // Add some styling or something.
          console.info('Too many characters.');
        }
        setTextValue(event.target.value);
        onChange(event);
      }}
    />
    {/* Right-side area */}
    {
      maxLength ? <div className={
        countStyles.join(' ')
          .concat(` ${textValue.length > maxLength ? ' !text-red' : ''}`)
      }>
        {maxLength - textValue.length}
      </div> : null
    }
  </div>
};

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  symbol: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

TextField.defaultProps = {
  variation: 'text',
  value: '',
  size: 'default',
  disabled: false,
};