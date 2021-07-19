import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern. 
import { generateStyles } from '../../shared/variationsHelper';
import Mail from './assets/feather/mail.svg';
import Search from './assets/feather/search.svg';
import Trash from './assets/feather/trash.svg';


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
  symbol: []
}

export const VARIATIONS = {
  default: {
    body: [
      ...COMMON.body,
      'bg-smoke',
      'dark:bg-dark-3',
      'rounded-full',
    ],
    symbol: [
      ...COMMON.symbol,
    ]
  },
  transparent: {
    body: [
      ...COMMON.body,
      'bg-transparent',
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
  }
}

export const SYMBOLS = { 
  default: <div />,
  search: <Search />,
  trash: <Trash />,
  mail: <Mail />
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A symbol element for representing a symbol of argument `symbol`.
 */
export const Symbol = ({ symbol, variation, size }) => {
  const { body: bodyStyles, symbol: symbolStyles } = generateStyles(variation, size, VARIATIONS, SIZES);
  const symbolSVG = (SYMBOLS[symbol] || SYMBOLS.default)
  
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