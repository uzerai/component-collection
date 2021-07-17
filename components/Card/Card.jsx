  import PropTypes from 'prop-types';
import React from 'react';
import { SIZES, VARIATIONS } from './CardVariations';
import { CardContent } from './components/CardContent';
import { CardFooter } from './components/CardFooter';
import { CardHeader } from './components/CardHeader';


/**
 * ##############################################################################
 * # A configurable card component with accompanying header and footer classes. #
 * ##############################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
export const Card = ({ variation, styles, children }) => {
  const classes = (styles || "").concat(VARIATIONS[variation]?.container?.join(' '))

  return <section className={classes}>
    {
      // Ensure that the Card.Header component is always at the top of the card when provided.
      React.Children.toArray(children).find(element => element.props.__TYPENAME === CardHeader.defaultProps.__TYPENAME)
    }

    {
      React.Children.toArray(children).find(element => element.props.__TYPENAME === CardContent.defaultProps.__TYPENAME)
    }
    
    {
      // Ensure that the Card.Footer component is always at the bottom when provided. 
      React.Children.toArray(children).find(element => element.props.__TYPENAME === CardFooter.defaultProps.__TYPENAME)
    }
  </section>
};

Card.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
};

Card.defaultProps = {
  variation: 'default',
  size: 'default',
  styles: "",
  children: undefined
};

