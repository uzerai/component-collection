import React from 'react';
import PropTypes from 'prop-types';

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
    lines.push((<SkeletonTextLoader.Line styles={styles} />));
  }

  return (
    <div className="px-4 py-2 animate-pulse">
      {lines}
    </div>
  );
};

SkeletonTextLoader.Line = ({ styles }) => {
  const numberOfBlobs = Math.floor(Math.random() * MAX_BLOBS) + MIN_BLOBS;
  const classes = (styles + " ").concat("flex-grow h-4 rounded");

  // Very basic elements of a single skeleton line.
  const SkeletonBlob = <span className={classes} />;
  const EmptyBlob = <span className="flex-grow h-4" />;
  const blobs = [];

  for(let i = numberOfBlobs; i !== 0; i--) {
    const visible = Math.floor(Math.random() * MAX_BLOBS) < MAX_BLOBS - MIN_BLOBS;
    visible ? blobs.unshift(SkeletonBlob) : blobs.push(EmptyBlob);
  }

  return <div className="flex justify-around flex-wrap space-x-2 py-1">
    {blobs}
  </div>;
}

SkeletonTextLoader.propTypes = {
  nLines: PropTypes.numberisRequired,
  styles: PropTypes.string,
};

SkeletonTextLoader.defaultProps = {
  nLines: 5,
  styles: 'bg-steam dark:bg-dark-3'
};
