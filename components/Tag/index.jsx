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
  body: [ 'inline-block', 'select-none'],
  text: [ 'font-effra', 'overflow-hidden', 'flex', 'flex-grow' ],
  count: ['mx-1', 'pl-1', 'border-l', 'inline', 'py-1'],
  close: ['inline-block', 'h-full', 'flex', 'items-center', 'cursor-pointer']
}

export const VARIATIONS = {
  default: {
    additional: {
      symbolVariation: 'default',
      symbolSize: 'fitHeight',
      symbolName: 'cross',
    },
    body: [ ...COMMON.body, 'bg-slate dark:bg-graphite' ],
    text: [ ...COMMON.text, 'text-white' ],
    count: [ ...COMMON.count, 'border-charcoal' ],
    close: [ ...COMMON.close ]
  },
  green: {
    body: [ ...COMMON.body, 'bg-green' ],
    text: [ ...COMMON.text, 'text-white' ],
    count: [...COMMON.count, 'border-green-dark' ],
    close: [ ...COMMON.close, 'text-white' ]
  },
  red: {
    body: [ ...COMMON.body, 'bg-red' ],
    text: [ ...COMMON.text, 'text-white' ],
    count: [...COMMON.count, 'border-red-dark' ]
  },
  yellow: {
    body: [ ...COMMON.body, 'bg-yellow' ],
    text: [ ...COMMON.text, 'text-black' ]
  },
  yellowWhite: {
    body: [ ...COMMON.body, 'bg-yellow' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  blue: {
    body: [ ...COMMON.body, 'bg-blue' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  pink: {
    body: [ ...COMMON.body, 'bg-pink' ],
    text: [ ...COMMON.text, 'text-white' ],
    count: [...COMMON.count, 'border-pink-dark' ]
  },
  lightBlue: {
    body: [ ...COMMON.body, 'bg-blue-light' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  lightGreen: {
    body: [ ...COMMON.body, 'bg-green-light' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  lightPink: {
    body: [ ...COMMON.body, 'bg-pink-lighter' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  orange: {
    body: [ ...COMMON.body, 'bg-orange' ],
    text: [ ...COMMON.text, 'text-white' ]
  },
  white: {
    body: [ ...COMMON.body, 'bg-white', 'border', 'border-charcoal', 'dark:border-none' ],
    text: [ ...COMMON.text, 'text-black' ]
  },
}

export const SIZES = {
  default: {
    body: [ 'rounded-md', 'px-1' ],
    text: [ 'text-sm', 'mx-1' ],
    close: [ 'w-4', 'px-1' ]
  },
  small: {
    body: [ 'rounded-sm', 'px-1' ],
    text: [ 'text-xs'],
    close: [ 'w-4' ]
  },
  large: {
    body: [ 'rounded-lg', 'px-2' ],
    text: [ 'text-xl' ],
    close: [ 'w-5', 'px-1' ]
  }
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default button which comes in a number of variations.
 */
export const Tag = ({ tagName, count, closeable, onClose, variation, size }) => {
  const {
    body: bodyStyles,
    text: textStyles,
    count: countStyles,
    close: closeStyles,
    additional: { symbolVariation, symbolSize, symbolName }
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={bodyStyles.join(' ')}>
    <div className={textStyles.join(' ')}>
      {tagName}
      <div className='inline-block'>
        {
          // Render either the count (when given), or the close-button
          count ?
            <span className={countStyles.join(' ')}>
              {count}
            </span> : null
        }
        {
          closeable ?
            <div onClick={(event) => onClose(event)} className={closeStyles.join(' ')}>
              <Symbol symbol={symbolName} variation={symbolVariation} size={symbolSize} />
            </div> : null
        }
      </div>
    </div>
  </div>
};

Tag.propTypes = {
  count: PropTypes.number,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  tagName: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  variation: 'default',
  size: 'default',
  closeable: false,
  onClose: undefined,
};