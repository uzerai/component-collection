import PropTypes from 'prop-types';
import React from 'react';
import { SIZES, VARIATIONS } from './ButtonVariations';

/**
 * The default button which comes in a number of variations.
 */
export const Button = ({ label, onClick, variation, size, styles, children }) => {
  // simple concatenation of classes, buttons are simple components
  const classNames = (SIZES[size] || [])
    .concat(VARIATIONS[variation]).join(' ').concat(' ' + styles);

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
  label: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Button.defaultProps = {
  size: 'default',
  label: undefined,
  styleOverride: undefined
};
