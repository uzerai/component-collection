import PropTypes from 'prop-types';
import React from 'react';
import { VARIATIONS } from '../CardVariations';


/**
 * #######################################################################################################################
 * # A footer component which will always appear at the bottom of the card if within the card's direct child components. #
 * #######################################################################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
export const CardFooter = ({ styles, children, variation }) => {
  const classes = (styles + ' ').concat(VARIATIONS[variation]?.footer.join(' '));

  return <footer data-function="header" className={classes}>
    {children}
  </footer>
}

CardFooter.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

CardFooter.defaultProps = {
  __TYPENAME: 'CardFooter',
  variation: 'default',
  styles: ''
}