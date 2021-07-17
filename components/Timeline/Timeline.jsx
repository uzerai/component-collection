import React from 'react';
import PropTypes from 'prop-types';

const VARIATIONS = {
  default: [],
  noIndicator: [],
  interwoven: [],
  noLink: [],
  noContinue: [],
  noGap: [],
};

const SIZES = {
  default: []
};

/**
 * A timeline component to serve as the main content of a page requiring things to be displayed
 * in order, downward.
 */
export const Timeline = ({ variation, size, styles, children }) => {
  const classNames = SIZES[size]
    .concat(VARIATIONS[variation])
    .concat(styles);

  return (
    <div className="w-full my-8 flex flex-col">
      {
        React.Children.toArray(children).find(
          element => element.props.__TYPENAME === 'TimelineHead'
        )
      }
      <section>
      {
        React.Children.toArray(children).filter(
          element => element.props.__TYPENAME === 'TimelineItem'
        ).map((child, index) => {
          return React.cloneElement(child, { key: `timeline-item-${index}` })
        })
      }
      </section>
      {
        React.Children.toArray(children).find(
          element => element.props.__TYPENAME === 'TimelineTail'
        )
      }
    </div>
  );
};

/**
 * Helper element for positioning a specific item as the HEADER of the timeline.
 * 
 * Will have the same effect as an external div preceding the timeline.
 * 
 * @param {*} param0 
 * @returns 
 */
Timeline.Head = ({ children }) => {
  return <>{children}</>
}
Timeline.Head.displayName = "TimelineHead";

Timeline.Head.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
}

Timeline.Head.defaultProps = {
  __TYPENAME: 'TimelineHead',
}

/**
 * Helper element for positioning a specific item as the TAIL/FOOTER of the timeline.
 * 
 * Will have the same effect as an external div preceding the timeline.
 * 
 * @param {*} param0 
 * @returns 
 */
Timeline.Tail = ({ children }) => {
  return <>{children}</>
}
Timeline.Tail.displayName = "TimelineTail";

Timeline.Tail.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
}

Timeline.Tail.defaultProps = {
  __TYPENAME: 'TimelineTail',
}

Timeline.Indicator = ({ children, variation }) => {
  return <>{children}</>
}

Timeline.Indicator.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
}

Timeline.Indicator.defaultProps = {
  __TYPENAME: 'TimelineIndicator',
}

Timeline.Item = ({children, id, variation, key}) => {
  const timeLineIndicator = React.Children.toArray(children)
    .find(element => element.props.__TYPENAME === 'TimelineIndicator')
    || <figure className="h-10 w-10 rounded-full bg-pink z-10" /> /* Default circle component */

  return <div className="flex gap-5 relative group" id={id} key={key}>
    <div className='flex items-start justify-center w-10'>
      <figure className="w-0.5 h-full bg-slate dark:bg-white absolute z-0" /> {/* Background line component */}
      <div className="mt-2 z-10 group-first:pt-5">
        {
          timeLineIndicator // conditionally selected above
        }
      </div>
    </div>
    <div className="flex-grow pb-5 group-last:pb-5 group-first:pt-5">
      { 
        React.Children.toArray(children).filter(element => !element.props?.__TYPENAME).map((element, index) => 
          React.cloneElement(element, { key: `timeline-item-${index}-content` }))
      }
    </div>
  </div>
}

Timeline.Item.displayName = "TimelineItem";


Timeline.Item.propTypes = {
  __TYPENAME: PropTypes.string.isRequired,
}

Timeline.Item.defaultProps = {
  __TYPENAME: 'TimelineItem',
}

Timeline.propTypes = {
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  styles: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

Timeline.defaultProps = {
  variation: 'default',
  size: 'default',
  styles: undefined,
  children: undefined
};
