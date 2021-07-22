import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import Activity from './assets/feather/activity.svg';
import Airplay from './assets/feather/airplay.svg';
import AlertCircle from './assets/feather/alert-circle.svg';
import AlertOctagon from './assets/feather/alert-octagon.svg';
import BellOff from './assets/feather/bell-off.svg';
import Bell from './assets/feather/bell.svg';
import Check from './assets/feather/check.svg';
import ChevronDown from './assets/feather/chevron-down.svg';
import ChevronUp from './assets/feather/chevron-up.svg';
import Command from './assets/feather/command.svg';
import HelpCircle from './assets/feather/help-circle.svg';
import Mail from './assets/feather/mail.svg';
import Search from './assets/feather/search.svg';
import Trash from './assets/feather/trash.svg';
import Cross from './assets/feather/x.svg';

/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */
const COMMON = {
  body: [
    'flex',
    'justify-center',
    'items-center',
  ],
  symbol: [
    'dark:text-white',
    'stroke-current',
  ]
}

export const VARIATIONS = {
  circled: {
    body: [
      ...COMMON.body,
      'bg-smoke',
      'dark:bg-dark-3',
      'rounded-full',
    ],
    symbol: [
      'stroke-current',
      'dark:text-smoke'
    ]
  },
  default: {
    body: [
      ...COMMON.body,
      'bg-transparent',
    ],
    symbol: [
      ...COMMON.symbol,
    ]
  },
  white: {
    body: [
      ...COMMON.body,
      'text-white',
    ],
    symbol: [
      ...COMMON.symbol,
      'text-white'
    ]
  }
}

export const SIZES = {
  default: {
    body: [
      'h-6',
      'w-6',
    ],
    symbol: [
      'h-4',
      'w-4'
    ],
  },
  fitHeight: {
    body: [ 'h-full' ],
  },
  fitWidth: {
    body: [ 'w-full' ]
  },
  small: {
    body: [
      'w-full'
    ],
    symbol: [
      'h-3',
      'w-3'
    ]
  }
}

export const SYMBOLS = {
  default: <div />,
  search: <Search />,
  trash: <Trash />,
  mail: <Mail />,
  alertCircle: <AlertCircle />,
  activity: <Activity />,
  airplay: <Airplay />,
  alertOctagon: <AlertOctagon />,
  bell: <Bell />,
  bellOff: <BellOff />,
  check: <Check />,
  chevronUp: <ChevronUp />,
  chevronDown: <ChevronDown />,
  command: <Command />,
  cross: <Cross />,
  helpCircle: <HelpCircle />
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A symbol element for representing a symbol of argument `symbol`.
 *
 * Uses the open source icons provided by the feather (https://feathericons.com) pack.
 */
export const Symbol = ({ symbol, variation, size }) => {
  const { body: bodyStyles, symbol: symbolStyles } = generateStyles(variation, size, VARIATIONS, SIZES);
  const symbolSVG = SYMBOLS[symbol]
  
  return <div className={bodyStyles.join(' ')}>
    { React.cloneElement(symbolSVG, { className: symbolStyles.join(' ') }) }
  </div>
};

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

Symbol.defaultProps = {
  size: 'default',
};