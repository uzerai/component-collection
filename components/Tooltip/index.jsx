import PropTypes from 'prop-types';
import React from 'react';
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
      ...COMMON.additional
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
  trigger,
  variation,
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
    },
    body: bodyStyles,
    text: textStyles
  } = generateStyles(variation, 'default', VARIATIONS, {default:{additional: {}}});

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    defaultVisible: (initialVisible || variationVisible),
    placement: (placement || variationPlacement),
    interactive: (interactive || variationInteractive),
    delayShow: (delayShow || variationDelayShow),
    trigger: (trigger || variationTrigger),
  });

  return (<>
    <span ref={setTriggerRef} className={textStyles.join(' ')}>{children}</span>
    { visible && (
      <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container text-base rounded' })}>
        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        <div className={bodyStyles.join(' ')}>
          {tooltip}
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
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Tooltip.defaultProps = {
  variation: 'default',
};