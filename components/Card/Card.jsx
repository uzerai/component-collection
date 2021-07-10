import React from 'react';
import PropTypes from 'prop-types';

const VARIATIONS = {
  default: {
    header: [
      "w-full",
      "px-6",
      "py-4",
    ],
    content: [
      'px-6',
      'bg-white',
    ],
    footer: [
      "w-full",
      "px-6",
      "py-2",
      "rounded-b"
    ],
    container: ["w-full", "rounded-sm", "shadow", "bg-steam"]
  },
  gray: {
    content: [
      'px-6',
      'bg-steam'
    ],
    container: ['w-full', 'rounded-sm', 'shadow', 'bg-steam']
  },
  nested: {
    container: ['w-full', 'rounded-md', 'border', 'border-smoke'],
  },
  none: {},
};

const SIZES = {
  default: [],
};

/**
 * ##############################################################################
 * # A configurable card component with accompanying header and footer classes. #
 * ##############################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
export const Card = ({ variation, size, styles, children }) => {
  const classes = styles.concat(VARIATIONS[variation]?.container?.join(' '))

  return <section className={classes}>
    {
      // Ensure that the Card.Header component is always at the top of the card when provided.
      React.Children.toArray(children).find(element => element.props.__TYPENAME === Card.Header.defaultProps.__TYPENAME)
    }

    {
      React.Children.toArray(children).filter(element => ![
        Card.Header.defaultProps.__TYPENAME,
        Card.Footer.defaultProps.__TYPENAME
      ].includes(element.props.__TYPENAME))
    }
    
    {
      // Ensure that the Card.Footer component is always at the bottom when provided. 
      React.Children.toArray(children).find(element => element.props.__TYPENAME === Card.Footer.defaultProps.__TYPENAME)
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

/**
 * ################################################################################################################
 * # A header class which will always appear at the top of the card if within the card's direct child components. #
 * ################################################################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
Card.Header = ({ styles, children, variation }) => {
  const classes = (styles + ' ')
    .concat(VARIATIONS[variation]?.header?.join(' '))

  return <header data-function="header" className={classes}>
    {children}
  </header>
}

Card.Header.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

Card.Header.defaultProps = {
  __TYPENAME: "Card.Header",
  variation: "default",
  styles: ""
}

/**
 * A content component for holding any other kind of content within the card.
 */
Card.Content = ({ styles, children, variation }) => {
  const classes = (styles + ' ')
    .concat(VARIATIONS[variation]?.content?.join(' '))

  return <div data-function="content" className={classes}>
    {children}
  </div>
}

Card.Content.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

Card.Content.defaultProps = {
  __TYPENAME: "Card.Content",
  variation: "default",
  styles: ""
}

/**
 * #######################################################################################################################
 * # A footer component which will always appear at the bottom of the card if within the card's direct child components. #
 * #######################################################################################################################
 * 
 * @param {*} param0 
 * @returns 
 */
Card.Footer = ({ styles, children, variation }) => {
  const classes = (styles + ' ').concat(VARIATIONS[variation]?.footer.join(' '));

  return <footer data-function="header" className={classes}>
    {children}
  </footer>
}

Card.Footer.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS))
}

Card.Footer.defaultProps = {
  __TYPENAME: "Card.Footer",
  variation: "default",
  styles: ""
}
