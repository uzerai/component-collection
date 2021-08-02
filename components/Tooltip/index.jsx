import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { generateStyles } from '../../shared/variationsHelper';
import './tooltip.css';

/**
 *  ######################################################
 *  #                VARIATION controls                  #
 *  ######################################################
 */

const COMMON = {
  additional: {
    placement: 'auto',
    delayShow: '200',
    trigger: 'hover',
    interactive: false,
    visible: false,
  }
}

const VARIATIONS = {
  default: {
    additional: {
      ...COMMON.additional,
      offset: [0, 4],
    },
    body: [
      'text-charcoal',
      'dark:text-white',
      'p-2'
    ],
    text: [
      'cursor-help',
      'underline'
    ]
  },
  click: {
    additional: {
      ...COMMON.additional,
      trigger: 'click',
      delayShow: 0
    }
  },
  focus: {
    additional: {
      ...COMMON.additional,
      trigger: 'focus',
      delayShow: 0
    },
    text: []
  },
  custom: {
    additional: {},
    body: [],
    text: []
  }
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A tooltip component utilizing the react-popper-tooltip library and extending it with classes to befit the UI style of H1.
 *
 * See: https://github.com/mohsinulhaq/react-popper-tooltip#readme
 */
export const Tooltip = ({
  tooltip,
  interactive,
  placement,
  visible: initialVisible,
  delayShow,
  offset,
  trigger,
  variation,
  animated,
  children
}) => {
  // Tooltip should not require size
  const {
    additional: {
      visible: variationVisible,
      placement: variationPlacement,
      interactive: variationInteractive,
      delayShow: variationDelayShow,
      trigger: variationTrigger,
      offset: variationOffset,
    },
    body: bodyStyles,
    text: textStyles
  } = generateStyles(variation, 'default', VARIATIONS, {default: {additional: {}}});
  /* This component is now controlled by its own visibility state. This is useful when animating. */
  const [ visible, setVisible ] = useState((initialVisible || variationVisible))
  const [ animationClass, setAnimationClass ] = useState('tooltipIn');
  const [ bodyAnimationClass, setBodyAnimationClass ] = useState(animated ? 'tooltipContentIn' : '');
  
  /**
   * A function for applying the animationClass of the tooltip (conditionally when visible is true/false)
   * allowing separate animations when loaded and unloaded.
   */
  const animateVisibility = (state) => {
    if(animated) {
      setAnimationClass(state ? 'tooltipIn' : 'tooltipOut')
      //TODO: system for handling custom animations via tailwindcss classes
      setBodyAnimationClass(state ? 'tooltipContentIn' : 'tooltipContentOut');
      if(!state) {
        setTimeout(() =>  setVisible(state), 200);
      } else{
        setVisible(state);
      }
    } else {
      setVisible(state);
    }
  }

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef
  } = usePopperTooltip({
    placement: (placement || variationPlacement),
    interactive: (interactive || variationInteractive),
    delayShow: (delayShow || variationDelayShow),
    trigger: (trigger || variationTrigger),
    offset: (offset || variationOffset),
    visible: visible,
    onVisibleChange: animateVisibility,
  });

  const tooltipContainerStyles = 'tooltip-container text-base rounded drop-shadow-sm '.concat(animationClass);

  return (<>
    <span ref={setTriggerRef} className={textStyles.join(' ')}>{children}</span>
    { visible && (
      <div ref={setTooltipRef} {...getTooltipProps({ className: tooltipContainerStyles })}>
        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        <div className='overflow-hidden'>
          <div className={bodyStyles.join(' ').concat(` ${bodyAnimationClass}`)}>
            {tooltip}
          </div>
        </div>
      </div>
    )}
  </>)
};

Tooltip.propTypes = {
  interactive: PropTypes.bool,
  visible: PropTypes.bool,
  delayShow: PropTypes.number,
  trigger: PropTypes.oneOf([
    'click',
    'right-click',
    'hover',
    'focus'
  ]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  tooltip: PropTypes.node.isRequired,
  offset: PropTypes.arrayOf(PropTypes.number),
  animated: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Tooltip.defaultProps = {
  variation: 'default',
  animated: false,
};