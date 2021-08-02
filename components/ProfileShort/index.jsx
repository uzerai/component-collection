import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import { Avatar } from '../Avatar';
import { NumberStatistic } from '../NumberStatistic';



/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    additional: {},
    body: [
      'dark:text-white',
    ]
  }
}

const SIZES = {
  default: {
    additional: {},
    body: []
  }
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * Simple example component for easy copy-paste initialization of other components.
 */
export const ProfileShort = ({ variation, size, children }) => {
  const { body: bodyStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')}>
    <div className='flex flex-col items-center px-4 pt-4'>
      <Avatar />
      <p className='text-2xl font-varta pt-2'>Username</p>
      <p className='text-sm text-stone dark:text-pink relative -top-2'>(@username)</p>
    </div>
    <div className='flex flex-col items-center border-t border-stone dark:border-dark-3 divide-y divide-stone divide-stone dark:divide-dark-3 mt-5'>
      <div className='grid grid-cols-2 font-varta divide-x divide-stone dark:divide-dark-3 w-40'>
        <NumberStatistic number={1337} label={'Reputation'} />
        <NumberStatistic number={69.42} label={'Signal'} />
      </div>
      <div className='w-full'>
        <NumberStatistic number={8008} label={'Impact'} variation={'fullWidth'} percentile={91}/>
      </div>
    </div>
  </div>
};

ProfileShort.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

ProfileShort.defaultProps = {
  size: 'default',
};