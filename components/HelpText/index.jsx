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
    text: [
      'font-effra',
      'text-stone',
      'font-thin',

    ]
  }
}

const SIZES = {
  default: {
    text: ['text-sm',]
  }
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A simple helpertext component to enforce that helper-text platform-wide can be altered from a single component.
 * 
 * There are no special restrictions on what can be contained within a HelperText span, but text will be forced RED when
 * hasError is true. This could lead to unexpected results in child components. As such it is recommended only to provide
 * unstyled text-based components as children.
 */
export const HelpText = ({  hasError, variation, size, children }) => {
  const { text: textStyles } = generateStyles(variation, size, VARIATIONS, SIZES);


  return <span className={textStyles.join(' ').concat(` ${hasError ? '!text-red' : '' }`)}>
    {children}
  </span>
};

HelpText.propTypes = {
  hasError: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

HelpText.defaultProps = {
  hasError: false,
  variation: 'default',
  size: 'default',
};