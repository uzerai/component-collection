import PropTypes from 'prop-types';
import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import './tooltip.css';

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
  size,
  children }) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    defaultVisible: initialVisible,
    placement: placement,
    interactive: interactive,
    delayShow: delayShow,
    trigger: trigger,
  });

  return (<>
    <span ref={setTriggerRef} className={'cursor-help underline'}>{children}</span>
    { visible && (
      <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container p-2 text-base rounded' })}>
        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        <div className="dark:text-white">
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Tooltip.defaultProps = {
  visible: false,
  trigger: 'hover',
  interactive: true,
  placement: 'auto',
  variation: 'default',
  children: undefined
};