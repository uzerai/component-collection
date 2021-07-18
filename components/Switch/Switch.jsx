import PropTypes from 'prop-types';
import React, { useState } from 'react';

const VARIATIONS = {
  default: {
    switchText: [
      "flex-grow",
      "text-white",
      "text-sm",
      "peer-checked:ml-2",
    ],
    background: [ // This is the div responsible for colouring in the switch
      "absolute",
      'peer-checked:bg-pink',
      'peer-disabled:peer-checked:bg-pink-lighter',
      'peer-disabled',
      'bg-stone',
      "h-full",
      "w-full",
    ],
    body: [ // This div holds all the other ones
      'relative',
      "rounded-full",
      "items-center",
      'flex',
      "cursor-pointer",
      "select-none",
      'overflow-hidden'
    ],
    dot: [
      "appearance-none",
      "rounded-full",
      "bg-white",
      "checked:border-pink",
      "disabled:checked:border-pink-lighter",
      "disabled:border-stone",
      "border-stone",
      "border-2",
      "cursor-pointer",
      'peer'
    ]
  },
  blue: {
    background: [
      "absolute",
      'peer-checked:bg-blue',
      'peer-disabled:peer-checked:bg-blue-lighter',
      'peer-disabled',
      'bg-stone',
      "h-full",
      "w-full",
    ],
    dot: [
      "appearance-none",
      "rounded-full",
      "bg-white",
      "checked:border-blue",
      "disabled:checked:border-blue-lighter",
      "disabled:border-stone",
      "border-stone",
      "border-2",
      "cursor-pointer",
      'peer'
    ]
  },
  green: {
    background: [
      "absolute",
      'peer-checked:bg-green',
      'peer-disabled:peer-checked:bg-green-lighter',
      'peer-disabled',
      'bg-stone',
      "h-full",
      "w-full",
    ],
    dot: [
      "appearance-none",
      "rounded-full",
      "bg-white",
      "checked:border-green",
      "disabled:checked:border-green-lighter",
      "disabled:border-stone",
      "border-stone",
      "border-2",
      "cursor-pointer",
      'peer'
    ]
  },
  noText: {
    switchText: [
      'hidden'
    ]
  },
  none: {}
};

const SIZES = {
  default: {
    body: [
      "h-6",
      "w-14"
    ],
    dot: [
      "w-6",
      "h-6"
    ]
  }
};

/**
 * Merging helper to simplify class construction for components
 * 
 * @param {*} variation 
 * @param {*} size 
 * @returns 
 */
 const mergedStyles = (variation, size) => {
  const output = {};
  const mergedArray = [
    ({ ...VARIATIONS.default, ...VARIATIONS[variation] }),
    (size ? {...SIZES.default, ...SIZES[size] } : { ...SIZES.default, ...SIZES[variation] })
  ];
  mergedArray.forEach((stylesObject)  => {
    Object.keys(stylesObject).forEach((key) => {
      output[key] = (output[key] || []).concat(stylesObject[key])
    })
  })

  return output;
}

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

  const {
    body, switchText, dot, background
  } = mergedStyles(variation, size);
  
  return <>
    {/** mainbody container, utilizes flex row-reversal for on/off effect */}
    <div className={body.join(' ').concat(` ${value ? 'flex-row-reverse' :'flex-row'}`)} onClick={onClick}>
      {/** The white dot which indicated status (along with text) */}
      <input type="checkbox"
        className={dot.join(' ').concat(' z-10')}
        checked={value}
        onChange={onClick}
        disabled={disabled}
        name={name}
        id={id}
      />
      {/** Internal ON/OFF text within the button*/}
      <div className={switchText.join(' ').concat(' z-10')}>
        <span>{value ? "ON" : "OFF"}</span>
      </div>
      <div className={background.join(' ').concat(' z-0')} />
    </div>
  </>;
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
  onToggle: (value) => value,
  checked: false,
  disabled: false,
  variation: 'default',
  size: 'default',
};
