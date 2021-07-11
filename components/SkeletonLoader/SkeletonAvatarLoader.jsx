import React from 'react';
import PropTypes from 'prop-types';

/**
 * An example component for easy generation of new ones.
 */
export const SkeletonAvatarLoader = ({ styles, children }) => {
  return (
    <div>Example Component</div>
  );
};

SkeletonAvatarLoader.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

SkeletonAvatarLoader.defaultProps = {
  styles: undefined,
  children: undefined
};
