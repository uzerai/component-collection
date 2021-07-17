import React from 'react';
import PropTypes from 'prop-types';

const VARIATIONS = {
  default: [
    'dark:text-white'
  ]
};

const SIZES = {
  default: []
};

/**
 * An example component for easy generation of new ones.
 */
export const ExampleComponent = ({ variation, size, styles, children }) => {
  const classNames = SIZES[size]
    .concat(VARIATIONS[variation])
    .concat(styles);
    
  return (
    <div className={classNames}>Example Component</div>
  );
};

ExampleComponent.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  styles: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

ExampleComponent.defaultProps = {
  variation: 'default',
  size: 'default',
  styles: undefined,
  children: undefined
};
