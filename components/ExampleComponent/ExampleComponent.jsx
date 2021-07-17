import PropTypes from 'prop-types';
import React from 'react';

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
    <>
      <div className={classNames}>Example Component</div>
      {children}
    </>
  );
};

ExampleComponent.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  styles: PropTypes.string,
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node]
  )
};

ExampleComponent.defaultProps = {
  variation: 'default',
  size: 'default',
  styles: undefined,
  children: undefined
};
