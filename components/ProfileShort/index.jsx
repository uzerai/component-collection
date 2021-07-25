import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import { Avatar } from '../Avatar';



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
    <div className='flex flex-col items-center border-t border-stone dark:border-dark-3 divide-y divide-stone divide-stone dark:divide-dark-3'>
      <div className='text-xs py-2 px-4 italic font-effra text-center'>Hack the planet</div>
      <div className='grid grid-cols-2 font-varta divide-x divide-stone dark:divide-dark-3'>
        <div className='text-charcoal w-18 dark:text-steam px-2 py-1 text-center'>
          <p className='text-xl font-effra'>5092</p>
          <label className='text-xs font-effra'>Reputation</label>
        </div>
        <div className='text-charcoal w-18 dark:text-steam px-2 py-1 text-center'>
          <p className='text-xl font-effra'>5092</p>
          <label className='text-xs font-effra'>Signal</label>
        </div>
      </div>
      <div className='flex flex-col items-center w-full text-charcoal dark:text-steam pb-3'>
        <p className='text-2xl font-effra'>16.91</p>
        <label className='text-xs font-effra'>Impact</label>
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