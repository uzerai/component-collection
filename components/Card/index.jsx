import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';


/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  additional: {},
  header: [],
  content: [],
  footer: [],
  container: [
    'rounded',
    'overflow-hidden',
    'shadow',
  ]
}

export const VARIATIONS = {
  default: {
    additional: {
      ...COMMON.additional,
    },
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
  default: {
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
    ]
  },
  noMargin: {
    content: []
  }
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
export const Card = ({ variation, size, children }) => {
  const { container: containerStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <section className={containerStyles.join(' ')}>
    {
      // Ensure that the Card.Header component is always at the top of the card when provided.
      React.Children.toArray(children).find(element => element?.type.name === CardHeader.displayName)
    }

    {
      React.Children.toArray(children).find(element => element?.type.name === CardContent.displayName)
    }
    
    {
      // Ensure that the Card.Footer component is always at the bottom when provided.
      React.Children.toArray(children).find(element => element?.type.name === CardFooter.displayName)
    }
  </section>
};


Card.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Card.defaultProps = {
  variation: 'default',
  size: 'default',
  children: undefined
};

/**
 *
 * A header class which will always appear at the top of the card if within the card's direct child components.
 *
 * @param {*} param0
 * @returns
 */
export const CardHeader = ({ size, variation, children }) => {
  const { header: headerStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <header data-function="header" className={headerStyles.join(' ')}>
    {children}
  </header>
}
CardHeader.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ])
}

CardHeader.defaultProps = {
  variation: 'default',
  size: 'default'
}

/**
 * A content component for holding any other kind of content within the card.
 */
export const CardContent = ({ size, variation, children }) => {
  const { content: contentStyle } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div data-function="content" className={contentStyle.join(' ')}>
    {children}
  </div>
}

CardContent.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ])
}

CardContent.defaultProps = {
  variation: 'default',
  styles: ''
}

/**
 * A footer component which will always appear at the bottom of the card if within the card's direct child components.
 *
 * @param {*} param0
 * @returns
 */
export const CardFooter = ({ size, variation, children  }) => {
  const { footer: footerStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <footer data-function="footer" className={footerStyles.join(' ')}>
    {children}
  </footer>
}

CardFooter.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ])
}

CardFooter.defaultProps = {
  variation: 'default',
  styles: ''
}