import PropTypes from 'prop-types';
import React from 'react';


/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  header: [
    'w-full',
    'px-6',
    'py-4',
  ],
  content: [
    'px-6',
    'py-4',
  ],
  footer: [
    'w-full',
    'px-6',
    'py-2',
  ],
  container: [
    'w-full',
    'rounded',
    'overflow-hidden',
    'shadow',
  ]
}

export const VARIATIONS = {
  default: {
    header: [
      ...COMMON.header,
      'dark:border-b',
      'dark:border-charcoal',
    ],
    content: [
      ...COMMON.content,
      'bg-white',
      'dark:bg-dark-1'
    ],
    footer: [
      ...COMMON.footer,
      'dark:border-t',
      'dark:border-charcoal',
    ],
    container: [
      ...COMMON.container,
      'bg-steam',
      'dark:bg-dark-2',
      'dark:text-steam',
      'dark:border-charcoal',
      'dark:border'
    ]
  },
  gray: {
    content: [
      ...COMMON.content,
      'dark:bg-dark-2',
    ],
    container: [
      ...COMMON.container,
      'bg-steam',
      'dark:bg-dark-3',
      'dark:border-charcoal',
      'dark:border',
    ]
  },
  nested: {
    container: [
      'w-full',
      'rounded-md',
      'border',
      'border-smoke',
      'dark:border-charcoal'
    ],
  },
  none: {},
};

export const SIZES = {
  default: [],
};


/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A configurable card component with accompanying header and footer classes. 
 * 
 * @param {*} param0 
 * @returns 
 */
export const Card = ({ variation, styles, children }) => {
  const classes = (styles || '').concat(VARIATIONS[variation]?.container?.join(' '))

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
  styles: '',
  children: undefined
};

/**
 * 
 * A header class which will always appear at the top of the card if within the card's direct child components. 
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
  __TYPENAME: 'CardHeader',
  variation: 'default',
  styles: ''
}

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

/**
 * A footer component which will always appear at the bottom of the card if within the card's direct child components.
 * 
 * @param {*} param0 
 * @returns 
 */
export const CardFooter = ({ styles, children, variation }) => {
  const classes = (styles + ' ').concat(VARIATIONS[variation]?.footer.join(' '));

  return <footer data-function="footer" className={classes}>
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