import PropTypes from 'prop-types';
import React from 'react';

const SIZES = {
  default: [
    'w-7',
    'h-3'
  ]
};

const RATINGS = {
  none: {
    styles: [
      'w-2/12',
      'bg-green',
    ],
    range: "0.0",
  },
  low: {
    styles: [
      'w-1/3',
      'bg-yellow'
    ],
    range: "0.1 ~ 3.9"
  },
  medium: {
    styles: [
      'w-1/2',
      'bg-orange'
    ],
    range: "4.0 ~ 6.9"
  },
  high: {
    styles: [
      'w-3/4',
      'bg-pink'
    ],
    range: "7.0 ~ 8.9"
  },
  critical: {
    styles: [
      'w-full',
      'min-h-full',
      'bg-red'
    ],
    range: "9.0 ~ 10.0"
  },
};

/**
 * A component to represent the severity and score (in both colour and label) of a CVSS score.
 */
export const Severity = ({size, rating, score}) => {
  const barClasses = RATINGS[rating].styles.join(' ').concat(' flex-grow rounded-full');
  const barContainerClasses = (SIZES[size] || SIZES['default']).join(' ')
    .concat(" rounded-full bg-smoke dark:bg-dark-3 overflow-hidden flex flex-col flex-none")
  const labelScore = score ? score : RATINGS[rating].range

  return (
    <div className="flex items-baseline gap-2">
      <div className={barContainerClasses}>
        <div className={barClasses} />
      </div>
      <label className="font-sans font-light capitalize dark:text-white">{rating} ({labelScore})</label>
    </div>
  );
};

Severity.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  rating: PropTypes.oneOf(Object.keys(RATINGS)),
  score: PropTypes.number,
};

Severity.defaultProps = {
  size: 'default',
  rating: 'low',
  score: undefined,
};
