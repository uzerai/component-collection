import React from 'react';
import PropTypes from 'prop-types';

// List of all sizes that we want developers to use.
const SIZES = {
  full: [
    'w-full',
  ]
};

const JUSTIFY = {
  center: [
    "justify-center",
  ],
  around: [
    "justify-around"
  ],
  right: [
    "justify-end"
  ],
  left: [
    "justify-start"
  ]
}

// Default classes we want applied across all variations.
const DEFAULT_CLASSES = [
  "flex",
  "items-baseline",
];

const BUTTON_CLASSES = [
  "py-3",
  "font-bold",
  "text-blue",
  "dark:text-steam",
  "flex-grow",
  "border",
  "border-blue",
  "dark:hover:border-dark-3",
  "focus:bg-blue",
  "active:bg-blue",
  "focus:text-white",
  "active:text-white",
  "transition",
  "duration-500",
  "last:rounded-r",
  "last:!border-r",
  "first:rounded-l",
  "first:!border-l",
  "even:border-l-0",
  "even:border-r-0"
]

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup = ({ buttons, justify, size,styleOverride }) => {
  const classNames = styleOverride ? 
    styleOverride : SIZES[size].concat(JUSTIFY[justify]).concat(DEFAULT_CLASSES).join(' ');
  return (
    <div className={classNames}>
      {
        buttons.map((element, index) => {
          const { props: originalProps } = element;
          console.log(index, originalProps.label, buttons.size);
          
          // if(index === 0) {
          //   // Custom styling the first element
          //   return React.cloneElement(element, {
          //     styleOverride: BUTTON_CLASSES.join(' ').concat(
          //       ' rounded-l !border-r-0'
          //     ),
          //     onClick: originalProps.onClick,
          //     label: originalProps.label
          //   })
          // } else if (index === (buttons.length - 1)) {
          //   // Custom styling the last element
          //   return React.cloneElement(element, {
          //     styleOverride: BUTTON_CLASSES.join(' ').concat(
          //       ' rounded-r !border-l-0'
          //     ),
          //     onClick: originalProps.onClick,
          //     label: originalProps.label
          //   })
          // }

          // All other elements
          return React.cloneElement(element, {
            styleOverride: BUTTON_CLASSES.join(' ')
          });
        })
      }
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.any).isRequired,
  justify: PropTypes.oneOf(Object.keys(JUSTIFY)).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)).isRequired,
  styleOverride: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonGroup.defaultProps = {
  buttons: [],
  justify: 'center',
  size: 'full',
  styleOverride: undefined
};
