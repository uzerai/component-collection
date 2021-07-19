import PropTypes from 'prop-types';
import React from 'react';
import { generateStyles } from '../../shared/variationsHelper';
import './Tooltip.css';

/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  tooltipIndicatorTriangle: [],
  tooltipWrapper: [
    'invisible',
    'opacity-0',
    'group-hover:group',
    'group-hover:opacity-100',
    'group-hover:visible',
    'group-hover:z-50',
    'duration-300',
    'absolute',
    'select-none',
    'w-full',
  ],
  tooltipText: [
    'flex' ,
    'justify-center',
  ]
}

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
      ...COMMON.tooltipWrapper,
    ],
    tooltipIndicatorTriangle: [
      ...COMMON.tooltipIndicatorTriangle,
      'bg-dark-3',
      'tooltip-pointer',
    ],
    tooltipText: [
      ...COMMON.tooltipText,
      'text-sm',
      'text-white',
      'bg-dark-3',
      'py-2',
      'px-3',
      'rounded',
    ]
  },
  above: {
    tooltipIndicatorTriangle: [
      'bg-dark-3',
      'tooltip-pointer-down',
    ]
  }
};

const SIZES = {
  default: {
    text: [],
    tooltipWrapper: [],
    tooltipIndicatorTriangle: [],
    tooltipText: [
      'w-44'
    ],
  },
  large: {
    tooltipText: [
      'md:w-64',
      'w-36'
    ],
  }
}


/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A component for enabling a tooltip within another component.
 */
export const Tooltip = ({ tooltip, variation, size, children }) => {
  const { 
    text: textStyles, 
    tooltipWrapper: tooltipWrapperStyles
  } = generateStyles(variation, size, VARIATIONS, SIZES);
    
  return (
    <span className={textStyles.join(' ')}>
      {children}
      <div className={tooltipWrapperStyles.join(' ')}>
        <Tooltip.Popup variation={variation} size={size}>
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
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Tooltip.defaultProps = {
  variation: 'default',
  children: undefined
};

Tooltip.Popup = ({ children, variation, size }) => {
  const { 
    tooltipIndicatorTriangle: tipStyles,
    tooltipText: textStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);


  return <div className={'flex justify-center gap-0'}>
    <div className='flex-grow'>
      <figure className={'h-2 '.concat(tipStyles.join(' '))} />
      <span className={textStyles.join(' ')}>
        {children}
      </span>
    </div>
  </div>
}

Tooltip.Popup.displayName = 'TooltipPopup';

Tooltip.Popup.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Tooltip.Popup.defaultProps = {
  variation: 'default',
  children: undefined,
}
