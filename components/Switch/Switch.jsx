import React, { useState } from 'react';
import PropTypes from 'prop-types';

const VARIATIONS = {
  default: {
    styles: [
      "rounded-full",
      "items-center",
      "flex",
      "cursor-pointer",
      "text-white",
      "font-normal",
      "text-sm",
      "select-none"
    ],
    activeColor: "pink"
  },
  blue: {
    styles: [
      "rounded-full",
      "items-center",
      "flex",
      "cursor-pointer",
      "text-white",
      "font-normal",
      "text-sm",
      "select-none"
    ],
    activeColor: 'blue'
  },
  green: {
    styles: [
      "rounded-full",
      "items-center",
      "flex",
      "cursor-pointer",
      "text-white",
      "font-normal",
      "text-sm",
      "select-none"
    ],
    activeColor: 'green'
  },
  none: {
    styles: [],
    activeColor: 'pink'
  }
};

const SIZES = {
  default: {
    outer: [
      "h-6",
      "w-16"
    ],
    inner: [
      "w-6",
      "h-6"
    ]
  }
};

/**
 * An checkbox component which will display as an on/off switch.
 * 
 * As a note; the onToggle prop function will receive the _PREVIOUS VALUE_ of the checkbox.
 * More accurately it is the value of the component before the change; 
 *    ie, when not clicked to clicked, false -> true
 *      onToggle() will receive `false`
 *        when clicked to not clicked, true -> false
 *      onToggle() will receive `true`  
 */
export const Switch = ({ name, id, onToggle, checked, disabled, variation, size }) => {
  const [value, setValue] =  useState(checked);
  const onClick = () => {
    if (!disabled) {
      setValue(!value); onToggle(value); 
    }
  };

  const classNames = SIZES[size].outer.join(' ')
    .concat(' ' + VARIATIONS[variation].styles.join(' '))
  const activeColor = VARIATIONS[variation].activeColor;

  return (
      <div className={
        `${value ? `bg-${activeColor}${disabled ? '-lighter' : ''}` : 
          `${disabled ? 'bg-steam dark:bg-dark-2' : 'bg-slate dark:bg-dark-3'}`
      } ${classNames}`} 
        onClick={onClick}>
        <span className={`flex-1 ml-3 ${!value ? 'hidden' : ''}`}>ON</span>
        <input type="checkbox"
          className={`${SIZES[size].inner.join(' ')} `
            + `rounded-full bg-white dark:bg-smoke appearance-none `
            + `${value ? `border-${activeColor}${disabled ? '-lighter' : ''}` : 
              `${disabled ? 'border-steam dark:border-dark-2' : 'border-slate dark:border-dark-3'}`} `
            + `border-2 cursor-pointer self-end`}
          checked={value}
          onChange={onClick}
          disabled={disabled}
          name={name}
          id={id}
        />
        <span className={`ml-1 ${value ? 'hidden' : ''}`}>OFF</span>
      </div>
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Switch.defaultProps = {
  name: undefined,
  id: undefined,
  onToggle: (value) => value,
  checked: false,
  disabled: false,
  variation: 'default',
  size: 'default',
  styles: undefined
};
