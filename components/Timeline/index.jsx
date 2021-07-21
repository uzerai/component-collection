import PropTypes from 'prop-types';
import React from 'react';
import { generateStyles } from '../../shared/variationsHelper';

/** 
 *  ######################################################
 *  #            VARIATION and STYLE controls            #
 *  ######################################################
 */
const COMMON = {
  container: [],
  item: [
    'flex-grow'
  ],
  itemLeft: [
    'flex',
    'justify-center'
  ],
  itemIndicator: [
    'z-10',
  ],
  timelineLine: [
    'h-full',
  ],
  timelineContainer: [],
}

const VARIATIONS = {
  default: {
    container: [
      'flex',
      'relative',
      'group'
    ],
    item: [
      ...COMMON.item
    ],
    itemLeft: [
      ...COMMON.itemLeft
    ],
    itemIndicator: [
      ...COMMON.itemIndicator,
      'rounded-full',
      'bg-pink',
    ],
    timelineLine: [
      ...COMMON.timelineLine,
      'bg-slate',
      'dark:bg-white',
      'absolute',
      'z-0'
    ],
    timelineContainer: [
      'z-10',
    ],
  },
  noIndicator: {
    itemIndicator: [
      'hidden'
    ],
  },
  interwoven: {
    itemIndicator: [
      'hidden',
    ],
    itemLeft: [
      ...COMMON.itemLeft,
      'absolute',
    ],
    item: [
      ...COMMON.item,
      'z-10'
    ]
  },
  smallIndicator: {
    itemIndicator: [
      ...COMMON.itemIndicator,
      'rounded-full',
      'bg-slate',
      'dark:bg-white',
    ]
  },
  noLink: {},
  noContinue: {},
  noGap: {},
};

const SIZES = {
  default: {
    container: [
      'gap-5'
    ],
    item: [
      'pb-5', 
      'group-last:pb-5',
      'group-first:pt-5'
    ],
    itemIndicator: [
      'h-10',
      'w-10',
    ],
    itemLeft: [
      'w-10'
    ],
    timelineLine: [
      'w-0.5'
    ],
    timelineContainer: [
      'mt-2',
      'group-first:pt-5'
    ]
  },
  interwoven: {
    itemLeft: [
      'h-full',
      'w-10'
    ]
  },
  gapStart: {
    itemLeft: [
      'w-10'
    ]
  },
  gapEnd: {
    itemLeft: [
      'h-full',
      'w-10'
    ]
  },
  noIndicator: {},
  smallIndicator: {
    itemIndicator: [
      'h-5',
      'w-5',
    ]
  }  
};

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A timeline component to serve as the main content of a page requiring things to be displayed
 * in order, downward.
 */
export const Timeline = ({ children, variation, size }) => {
  return <div className="flex flex-col">
    {
      React.Children.toArray(children).find((node) => node.type.name === TimelineHead.name)
    }
    <section>
      {
        React.Children.toArray(children).filter(
          (element) => element.type.name === TimelineItem.name
        ).map((child, index) => React.cloneElement(child, { 
          key: `timeline-item-${index}`, variation: variation, size: size, ...child.props
        }))
      }
    </section>
    {
      React.Children.toArray(children).find((node) => node.type.name === TimelineTail.name)
    }
  </div>;
};

Timeline.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Timeline.defaultProps = {
  variation: 'default',
  size: 'default',
  children: undefined,
};

export const TimelineItem = ({ id, name, variation, size, children }) => {
  const {
    container: containerStyles,
    item: itemStyles,
    itemIndicator: indicatorStyles,
    itemLeft: itemLeftStyles,
    timelineLine: timelineStyles,
    timelineContainer: timelineContainerStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  /**
   * Here is selected the <TimelineIndicator> indicator which will represent the item on the timeline-line.
   *
   * A default size of w-10 is set on the indicator's flex container, thus introducing a custom indicator
   * with a width higher than will cause some deformation from the intended look.
   */
  const timelineIndicator = React.Children.toArray(children)
    .find((node) => node.type.name === TimelineIndicator.name)
    || <figure className={indicatorStyles.join(' ')} />; /* Default timeline indicator component */

  return <div className={containerStyles.join(' ')} id={id} name={name}>
    {/* This is the left-side segment of each item, containing the timeline-line and the indicator */}
    <div className={itemLeftStyles.join(' ')}>
      <figure className={timelineStyles.join(' ')} />
      {/* Timeline-line */}
      <div className={timelineContainerStyles.join(' ')}>
        {
          timelineIndicator // conditionally selected above
        }
      </div>
    </div>
    {/* This is the container of the children given to the TimelineItem */}
    <div className={itemStyles.join(' ')}>
      {
        React.Children.toArray(children)
          .filter((element) => element.type.name && !element.type.name.includes('Timeline'))
          .map((element, index) => React.cloneElement(element, { key: `timeline-item-${index}-content` }))
      }
    </div>
  </div>;
};

TimelineItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

TimelineItem.defaultProps = {
  variation: 'default',
  size: 'default'
};

/**
 * Helper element for positioning a specific item as the HEADER of the timeline.
 *
 * Will have the same effect as an external div preceding the timeline.
 *
 * @param {*} param0
 * @returns
 */
export const TimelineHead = ({ children }) => <>{children}</>;
 
TimelineHead.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};
TimelineHead.defaultProps = {};
 
/**
  * Helper element for positioning a specific item as the TAIL/FOOTER of the timeline.
  *
  * Will have the same effect as an external div preceding the timeline.
  *
  * @param {*} param0
  * @returns
  */
export const TimelineTail = ({ children }) => <>{children}</>;
 
TimelineTail.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};
TimelineTail.defaultProps = {};
 
export const TimelineIndicator = ({ children }) => <>{children}</>;
 
TimelineIndicator.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};
TimelineIndicator.defaultProps = {};