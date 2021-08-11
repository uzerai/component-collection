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
    ],
    header: [
      'flex',
      'flex-col',
      'items-center',
      'px-4',
      'pt-4'
    ],
    usernameText: [
      'text-2xl',
      'font-varta',
      'pt-2'
    ],
    handleText: [
      'text-sm',
      'text-stone',
      'dark:text-pink',
      'relative',
      '-top-2'
    ],
    statistics: [
      'flex',
      'flex-col',
      'items-center',
      'border-t',
      'border-stone',
      'dark:border-dark-3',
      'divide-y',
      'divide-stone',
      'divide-stone',
      'dark:divide-dark-3',
      'mt-5'
    ],
    topStats: [
      'grid',
      'grid-cols-2',
      'font-varta',
      'divide-x',
      'divide-stone',
      'dark:divide-dark-3',
      'w-40'
    ],
    botStats: [
      'w-full'
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
export const ProfileShort = ({ variation, size, user }) => {
  const {
    body: bodyStyles,
    header: headerStyles,
    usernameText: usernameTextStyles,
    handleText: handleTextStyles,
    statistics: statisticsStyles,
    topStats: topStatsStyles,
    botStats: botStatsStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')}>
    <div className={headerStyles.join(' ')}>
      <Avatar />
      <p className={usernameTextStyles.join(' ')}>{user.username}</p>
      <p className={handleTextStyles.join(' ')}>(@{user.handle})</p>
    </div>
    <div className={statisticsStyles.join(' ')}>
      <div className={topStatsStyles.join(' ')}>
        <NumberStatistic number={user.reputation} label={'Reputation'} />
        <NumberStatistic number={user.signal} label={'Signal'} />
      </div>
      <div className={botStatsStyles.join(' ')}>
        <NumberStatistic number={user.impact} label={'Impact'} variation={'fullWidth'} percentile={user.impact_percentile}/>
      </div>
    </div>
  </div>
};

ProfileShort.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    handle: PropTypes.string,
    reputation: PropTypes.number,
    signal: PropTypes.number,
    impact: PropTypes.number,
    impact_percentile: PropTypes.number,
  }).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

ProfileShort.defaultProps = {
  size: 'default',
};