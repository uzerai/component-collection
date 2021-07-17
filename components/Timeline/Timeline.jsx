import PropTypes from 'prop-types';
import React from 'react';
import { SIZES, VARIATIONS } from './TimelineVariations';

/** 
 *  ######################################################
 *  #            VARIATION and STYLE controls            #
 *  ######################################################
 */

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
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A timeline component to serve as the main content of a page requiring things to be displayed
 * in order, downward.
 */
export const Timeline = ({ children, variation, size }) => {
  // if no default size is set, use same key as variation
  const finalSize = size ? size : variation;

  return (
    <div className="flex flex-col">
      {
        React.Children.toArray(children).find(
          (element) => element.props.__TYPENAME === 'TimelineHead',
        )
      }
      <section>
        {
          React.Children.toArray(children).filter(
            (element) => element.props.__TYPENAME === 'TimelineItem',
          ).map((child, index) => React.cloneElement(child, { 
            key: `timeline-item-${index}`,
            // Variation of the child overrides the variation given to the entire timeline.
            variation: (child.props.variation || variation),
            // if no default size is set on the child, we use the variation name
            size: ((child.props.size || child.props.variation)  || finalSize) 
          }))
        }
      </section>
      {
        React.Children.toArray(children).find(
          (element) => element.props.__TYPENAME === 'TimelineTail',
        )
      }
    </div>
  );
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
  size: undefined,
  children: undefined,
};

Timeline.Item = ({
  children, id, variation, size,
}) => {

  const {
    container: containerStyles,
    item: itemStyles,
    itemIndicator: indicatorStyles,
    itemLeft: itemLeftStyles,
    timelineLine: timelineStyles,
    timelineContainer: timelineContainerStyles,
  } = mergedStyles(variation, size);

  /**
   * Here is selected the <Timeline.Indicator> indicator which will represent the item on the timeline-line.
   *
   * A hard limit of w-10 is set by default on the indicator's flex, introducing a custom indicator
   * with a width higher than will cause some deformation from the intended look.
   */
  const timelineIndicator = React.Children.toArray(children)
    .find((element) => element.props.__TYPENAME === 'TimelineIndicator')
    || <figure className={indicatorStyles.join(' ')} />; /* Default timeline indicator component */

  return (
    <div className={containerStyles.join(' ')} id={id}>
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
      {/* This is the container of the children given to the Timeline.Item */}
      <div className={itemStyles.join(' ')}>
        {
          React.Children.toArray(children)
            .filter((element) => !element.props?.__TYPENAME)
            .map((element, index) => React.cloneElement(element, { key: `timeline-item-${index}-content` }))
        }
      </div>
    </div>
  );
};

Timeline.Item.displayName = 'TimelineItem';

Timeline.Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  __TYPENAME: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Timeline.Item.defaultProps = {
  __TYPENAME: 'TimelineItem',
  variation: 'default'
};

/**
 * Helper element for positioning a specific item as the HEADER of the timeline.
 *
 * Will have the same effect as an external div preceding the timeline.
 *
 * @param {*} param0
 * @returns
 */
 Timeline.Head = ({ children }) => <>{children}</>;
 Timeline.Head.displayName = 'TimelineHead';
 
 Timeline.Head.propTypes = {
   __TYPENAME: PropTypes.string,
   children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
 };
 
 Timeline.Head.defaultProps = {
   __TYPENAME: 'TimelineHead',
 };
 
 /**
  * Helper element for positioning a specific item as the TAIL/FOOTER of the timeline.
  *
  * Will have the same effect as an external div preceding the timeline.
  *
  * @param {*} param0
  * @returns
  */
 Timeline.Tail = ({ children }) => <>{children}</>;
 Timeline.Tail.displayName = 'TimelineTail';
 
 Timeline.Tail.propTypes = {
   __TYPENAME: PropTypes.string,
   children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
 };
 
 Timeline.Tail.defaultProps = {
   __TYPENAME: 'TimelineTail',
 };
 
 Timeline.Indicator = ({ children }) => <>{children}</>;
 Timeline.Indicator.displayName = 'TimelineIndicator';
 
 Timeline.Indicator.propTypes = {
   __TYPENAME: PropTypes.string,
   children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
 };
 
 Timeline.Indicator.defaultProps = {
   __TYPENAME: 'TimelineIndicator',
 };