import PropTypes from 'prop-types';
import React from 'react';
import { generateStyles } from '../../shared/variationsHelper';

/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

// Classes shared by all buttons
const COMMON = [
  'transition',
  'duration-700',
  'focus:shadow',
  'rounded',
  'dark:text-white',
]

// List of all button variations that we want developers to use
const VARIATIONS = {
  default:{
    body: [
      ...COMMON,
    ]
  },
  primary: {
    body: [
      ...COMMON,
      'text-white',
      'font-semibold',
      'bg-pink',
      'hover:bg-pink-dark',
    ]
  },
  secondary: {
    body: [
      ...COMMON,
      'text-pink',
      'font-semibold',
      'border',
      'border-pink',
      'hover:border-pink-dark'
    ]
  },
  tertiary: {
    body: [
      ...COMMON,
      'text-pink',
      'font-medium',
      'hover:underline',
      'hover:text-pink-dark',
      'rounded',
      'focus:!shadow-none'
    ]
  },
  blue: {
    body: [
      ...COMMON,
      'text-white',
      'font-semibold',
      'bg-blue',
      'hover:bg-blue-dark',
    ]
  },
  danger: {
    body: [
      ...COMMON,
      'text-white',
      'bg-red',
      'hover:bg-red-dark',
      'font-semibold',
    ]
  }
};

// List of all sizes that we want developers to use.
const SIZES = {
  default: {
    body: [
      'py-2',
      'px-5',
    ]
  },
  full: {
    body: [
      'w-full',
      'py-2',
      'px-5'
    ]
  },
  half: {
    body: [
      'w-1/2',
      'py-2',
      'px-5'
    ]
  },
  none: {
    body: []
  },
  large: {
    body: [
      '!py-4',
      '!px-6'
    ]
  }
};

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default button which comes in a number of variations.
 */
export const Button = ({ label, onClick, variation, size, children }) => {
  const { body: bodyStyles } = generateStyles(variation, size, VARIATIONS, SIZES)

  return (
    <button
      type="button"
      onClick={onClick}
      className={bodyStyles.join(' ')}
    >
      {label ? label : children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Button.defaultProps = {
  size: 'default',
  variation: 'primary',
  label: undefined,
};
