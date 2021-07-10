import React from 'react';
import PropTypes from 'prop-types';

// List of all button variations that we want developers to use
const VARIATIONS = {
  primary: [
    'text-white',
    'font-semibold',
    'bg-pink',
    'hover:bg-pink-dark',
    'rounded'
  ],
  secondary: [
    'text-pink',
    'font-semibold',
    'border',
    'border-pink',
    'hover:border-pink-dark',
    'rounded'
  ],
  tertiary: [
    'text-pink',
    'font-medium',
    'dark:text-white',
    'hover:underline',
    'hover:text-pink-dark',
    'rounded',
    'focus:!shadow-none'
  ],
  blue: [
    'text-white',
    'font-semibold',
    'bg-blue',
    'hover:bg-blue-dark',
    'rounded',
  ],
  danger: [
    'text-white',
    'bg-red',
    'hover:bg-red-dark',
    'font-semibold',
    'rounded',
  ]
};

// List of all sizes that we want developers to use.
const SIZES = {
  full: [
    'w-full',
    'py-2',
    'px-5'
  ],
  half: [
    'w-1/2',
    'py-2',
    'px-5'
  ],
  default: [
    'py-2',
    'px-5',
  ],
  none: [],
  large: [
    '!py-4',
    '!px-6'
  ]
};

// Default classes we want applied across all variations.
const DEFAULT_CLASSES = [
  'transition',
  'duration-700',
  'focus:shadow'
];

/**
 * The default button which comes in a number of variations.
 */
export const Button = ({ label, onClick, variation, size, styles, children }) => {
  const classNames = (SIZES[size] || [])
      .concat(VARIATIONS[variation]).concat(DEFAULT_CLASSES).join(' ').concat(' ' + styles);

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames}
    >
      {label ? label : children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  size: 'default',
  label: undefined,
  styleOverride: undefined
};
