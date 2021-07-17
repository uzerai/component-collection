import PropTypes from 'prop-types';
import React from 'react';

/**
 * The maximum number of 'loading blobs' on a single line (see SkeletonTextLoader.Line)
 */
const MAX_BLOBS = 4;
const MIN_BLOBS = 2;

/**
 * A component for representing the loading of Text information.
 * 
 * This component randomly generates the amount of blobs and attempts to offset it so that
 * the placeholder text loaders seem more paragraph-like.
 */
export const SkeletonTextLoader = ({ nLines, styles }) => {
  const lines = [];

  for(let i = nLines; i !== 0; i--) {
    lines.push((<SkeletonTextLoader.Line styles={styles} key={i} />));
  }

  return (
    <div className="px-4 py-2 animate-pulse">
      {lines}
    </div>
  );
};

SkeletonTextLoader.propTypes = {
  nLines: PropTypes.number.isRequired,
  styles: PropTypes.string
};

SkeletonTextLoader.defaultProps = {
  nLines: 5,
  styles: 'bg-steam dark:bg-dark-3'
};

/**
 * A component designating a single line which is loading.
 * 
 * This component randomly generates between MIN_BLOBS and MAX_BLOBS blobs of
 * skeleton-text (which are separated like a space), and places the blanks on
 * the end to randomly generate a less-uniform and more paragraph-like look.
 * 
 * @param {*} param0 
 * @returns 
 */
SkeletonTextLoader.Line = ({ styles }) => {
  const numberOfBlobs = Math.floor(Math.random() * MAX_BLOBS) + MIN_BLOBS;
  const classes = (styles + " ").concat("flex-grow h-4 rounded");

  // Very basic elements of a single skeleton line.
  const SkeletonBlob = () => <span className={classes} />;
  const EmptyBlob = () => <span className="flex-grow h-4" />;
  const blobs = [];

  for(let i = numberOfBlobs; i !== 0; i--) {
    const visible = Math.floor(Math.random() * MAX_BLOBS) < MAX_BLOBS - MIN_BLOBS;
    visible ? blobs.unshift(<SkeletonBlob key={i} />) : blobs.push(<EmptyBlob key={i} />);
  }

  return <div className="flex justify-around flex-wrap space-x-2 py-1">
    {blobs}
  </div>;
}

SkeletonTextLoader.Line.displayName = 'SkeletonTextLoader';
SkeletonTextLoader.Line.propTypes = {
  styles: PropTypes.string
}
