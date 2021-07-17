import PropTypes from 'prop-types';
import React from 'react';
import './Tooltip.css';


const VARIATIONS = {
  default: {
    text: [
      'group',
      'relative',
      'cursor-help',
      'underline',
      'inline-block',
    ],
    tooltipWrapper: [
      "opacity-0",
      "hidden",
      "group",
      "group-hover:opacity-100",
      "group-hover:block",
      "absolute",
      "duration-700",
      "-inset-x-1/2",
      "select-none"
    ],
    tooltipContainer: [
      "bg-dark-3",
      "dark:bg-dark-1"
    ],
    tooltipText: [
      "text-sm",
      "text-white",
      "bg-dark-3",
      "dark:bg-dark-1",
      "p-2",
      "rounded",
      "flex" ,
      "justify-center",
    ]
  }
};

/**
 * A component for enabling a tooltip within another component.
 */
export const Tooltip = ({ tooltip, variation, styles, children }) => {
  const { 
    text: textStyles, 
    tooltipWrapper: tooltipWrapperStyles
  } = (VARIATIONS[variation], VARIATIONS.default)
    
  return (
    <span className={textStyles.join(' ')}>
      {children}
      <div className={tooltipWrapperStyles.join(' ')}>
        <Tooltip.Popup variation={variation} styles={styles}>
          {tooltip}
        </Tooltip.Popup>
      </div>
    </span>
  );
};

Tooltip.propTypes = {
  tooltip: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Tooltip.defaultProps = {
  variation: 'default',
  styles: undefined,
  children: undefined
};

Tooltip.Popup = ({ children, variation, styles }) => {
  const { 
    tooltipContainer: containerStyles,
    tooltipText: textStyles,
   } = (VARIATIONS[variation] || VARIATIONS.default)
  
  if (styles) {
    containerStyles.push(`${styles}`)
  }

  return <div className={"flex justify-center gap-0"}>
    <div className={styles}>
      <figure className={"tooltip-pointer h-2 ".concat(containerStyles.join(' '))} />
      <div className={textStyles.join(' ')}>
        {children}
      </div>
    </div>
  </div>
}

Tooltip.Popup.displayName = 'TooltipPopup';

Tooltip.Popup.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Tooltip.Popup.defaultProps = {
  variation: 'default',
  styles: undefined,
  children: undefined,
}
