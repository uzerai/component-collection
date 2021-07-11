import React from 'react';

import PropTypes from 'prop-types';
import { VARIATIONS } from '../CardVariations';

/**
 * ################################################################################################################
 * # A header class which will always appear at the top of the card if within the card's direct child components. #
 * ################################################################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
export const CardHeader = ({ styles, children, variation }) => {
  const classes = (styles + ' ')
    .concat(VARIATIONS[variation]?.header?.join(' '))

  return <header data-function="header" className={classes}>
    {children}
  </header>
}
CardHeader.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

CardHeader.defaultProps = {
  __TYPENAME: "CardHeader",
  variation: "default",
  styles: ""
}
