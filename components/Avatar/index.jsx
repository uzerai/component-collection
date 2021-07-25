import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';



/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  body: ['relative']
}

const VARIATIONS = {
  default: {
    additional: {},
    body: [
      ...COMMON.body,
      'bg-stone',
      'rounded-full',
      'dark:text-white',
      'ring-2',
      'ring-white',
      'drop-shadow-md'
    ]
  }
}

const SIZES = {
  default: {
    additional: {},
    body: [
      'w-14',
      'h-14'
    ]
  },
  timeline: {
    body: [
      'w-10',
      'h-10'
    ]
  },
  fill: {
    body: ['w-full', 'h-full']
  }
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default Avatar which comes with in-component support for displaying the users'
 * badges. Avatar badges are not enabled by default,
 */
export const Avatar = ({ _src, variation, badges, size }) => {
  const { body: bodyStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')}>
    <figure className={'absolute h-full w-full rounded-full overflow-hidden'}>
      <Symbol symbol={'user'} variation={'charcoal'} size={'fill'} />
    </figure>
    {
      badges && <div className='absolute right-0 bottom-0 bg-blue w-4 h-4 m-0.5 rounded-full scale-125'>
        <Symbol symbol={'stopCircle'} variation={'white'} size={'fitWidth'} />
      </div>
    }
  </div>
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  badges: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

Avatar.defaultProps = {
  size: 'default',
};