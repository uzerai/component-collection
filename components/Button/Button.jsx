import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, onClick }) => {
  const classes = [
    'bg-pink',
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes.join(',')}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "Label Me!",
  onClick: undefined,
};
