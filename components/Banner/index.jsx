import PropTypes from 'prop-types';
import { React } from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern. 
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';



/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  container: [
    'relative',
    'flex',
    'rounded',
    'overflow-hidden'
  ],
  streak: [],
  body: [
    'flex-grow',
  ],
}

const VARIATIONS = {
  default: {
    container: [
      ...COMMON.container,
      'border',
      'border-steam',
    ],
    streak: [
      ...COMMON.streak,
      'bg-yellow',
    ],
    body: [ ...COMMON.body ]
  },
  green: {
    streak: [ ...COMMON.streak, 'bg-green' ]
  },
  red: {
    streak: [ ...COMMON.streak, 'bg-red' ]
  }
}

const SIZES = {
  default: {
    container: [],
    streak: [ 'w-1', 'mr-4' ],
    body: [ 'my-4' ]
  }
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A simple banner component for indicating to users that something has happened.
 */
export const Banner = ({ dismissable, onDismiss, variation, size, children }) => {
  const { 
    container: containerStyles, 
    body: bodyStyles, 
    streak: streakStyles 
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={containerStyles.join(' ')}>
    {
      dismissable && 
      <button 
        onClick={onDismiss} className={'absolute top-0 right-0'}>
        <Symbol symbol='cross' />
      </button>
    }
    <div className={streakStyles.join(' ')} />
    <div className={bodyStyles.join(' ')}>
      {children}
    </div>
  </div>
};

Banner.propTypes = {
  dismissable: PropTypes.bool,
  onDismiss: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Banner.defaultProps = {
  dismissable: false,
  variation: 'default',
  size: 'default',
};