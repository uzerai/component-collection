import PropTypes from 'prop-types';
import React from 'react';

// List of all sizes that we want developers to use.
const SIZES = {
  full: [
    'w-full',
  ]
};

const JUSTIFY = {
  center: [
    'justify-center',
  ],
  around: [
    'justify-around'
  ],
  right: [
    'justify-end'
  ],
  left: [
    'justify-start'
  ]
}

// Default classes we want applied across all variations.
const GROUP_CLASSES = {
  default: [
    'flex',
    'items-baseline',
  ]
}

const BUTTON_CLASSES = {
  default: [
    'py-3',
    'font-bold',
    'text-blue',
    'dark:text-steam',
    'flex-grow',
    'border',
    'border-blue',
    'dark:hover:border-dark-3',
    'focus:bg-blue',
    'active:bg-blue',
    'focus:text-white',
    'active:text-white',
    'transition',
    'duration-500',
    'last:rounded-r',
    'last:!border-r',
    'first:rounded-l',
    'first:!border-l',
    'even:border-l-0',
    'even:border-r-0'
  ],
  separated: [
    'py-3',
    'font-bold',
    'text-blue',
    'dark:text-steam',
    'border',
    'border-blue',
    'dark:hover:border-dark-3',
    'focus:bg-blue',
    'active:bg-blue',
    'focus:text-white',
    'active:text-white',
    'transition',
    'duration-350'
  ]
}

/**
 * Component representing grouped buttons; recommended 
 * for button groupings where only one of the grouped buttons should be clicked.
 * 
 * Ideally keep the button count under 5, as larger amounts of buttons make the button group cluttered.
 */
export const ButtonGroup = ({ variation, justify, size, styles, buttonStyles, children }) => {
  const classNames = SIZES[size]
    .concat(JUSTIFY[justify])
    .concat(GROUP_CLASSES[variation] || GROUP_CLASSES['default']).join(' ')
    .concat(styles);
  return (
    <div className={classNames}>
      {
        children.map(element => {
          return React.cloneElement(element, {
            styles: BUTTON_CLASSES[variation].join(' ')
              .concat(' ' + buttonStyles),
          });
        })
      }
    </div>
  );
};

ButtonGroup.propTypes = {
  justify: PropTypes.oneOf(Object.keys(JUSTIFY)),
  variation: PropTypes.oneOf(Object.keys(BUTTON_CLASSES)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  styles: PropTypes.string,
  buttonStyles: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.element
  ])
};

ButtonGroup.defaultProps = {
  variation: 'default',
  buttons: [],
  justify: 'center',
  size: 'full'
};
