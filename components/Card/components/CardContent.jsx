import PropTypes from 'prop-types';
import React from 'react';
import { VARIATIONS } from '../CardVariations';


/**
 * A content component for holding any other kind of content within the card.
 */
export const CardContent = ({ styles, children, variation }) => {
  const classes = (styles + ' ')
    .concat(VARIATIONS[variation]?.content?.join(' '))

  return <div data-function="content" className={classes}>
    {children}
  </div>
}

CardContent.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

CardContent.defaultProps = {
  __TYPENAME: 'CardContent',
  variation: 'default',
  styles: ''
}
