import PropTypes from 'prop-types';
import React, { useState } from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';
import './alert.css';



/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  body: [
    'flex',
    'justify-center',
    'p-2',
  ],
  message: [
    'flex-grow',
    'ml-2',
    'font-effra',
  ],
  symbol: [
    'flex-shrink'
  ]
}

const VARIATIONS = {
  default: {
    additional: {
      symbol: 'alertTriangle',
      symbolVariation: 'charcoal'
    },
    body: [
      ...COMMON.body,
      'bg-yellow'
    ],
    symbol: [
      ...COMMON.symbol
    ],
    message: [
      ...COMMON.message,
    ]
  },
  success: {
    additional: {
      symbol: 'checkSquare',
      symbolVariation: 'charcoal',
    },
    body: [
      ...COMMON.body,
      'bg-green'
    ]
  },
  danger: {
    additional: {
      symbol: 'alertOctagon',
      symbolVariation: 'charcoal',
    },
    body: [
      ...COMMON.body,
      'bg-red'
    ]
  },
  info: {
    additional: {
      symbol: 'info',
      symbolVariation: 'white',
    },
    body: [
      ...COMMON.body,
      '!text-white',
      'bg-blue'
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
 * Simple alert component for signifying something has happened on the receival of an interaction.
 */
export const Alert = ({ variation, size, children }) => {
  const [visible, setVisible] = useState(true);
  const [animation, setAnimation] = useState('alertIn');
  const {
    body: bodyStyles,
    additional: {
      symbol: symbolName,
      symbolVariation,
    },
    symbol: symbolStyles,
    message: messageStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return visible && <div className={bodyStyles.join(' ') + ` ${animation}`}>
    <figure className={symbolStyles.join(' ')}>
      <Symbol
        symbol={symbolName}
        variation={symbolVariation}
        size={'default'}
      />
    </figure>
    <div className={messageStyles.join(' ')}>
      {children}
    </div>
    <figure className={'flex-shrink cursor-pointer'} onClick={
      () => {
        // ANIMATION HANDLING HERE.
        setAnimation('alertOut');
        setTimeout(() => setVisible(false), 200);
      }
    }>
      <Symbol
        symbol='cross'
        variation='charcoal'
      />
    </figure>
  </div>
};

Alert.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Alert.defaultProps = {
  size: 'default',
};