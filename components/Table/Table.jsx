import PropTypes from 'prop-types';
import React from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern. 
import { generateStyles } from '../../shared/variationsHelper';



/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  container: [
    'w-full',
    'table-auto',
  ],
  head: [
    'dark:border-b',
    'dark:border-dark-3'
  ],
  body: [],
  row: [
    'border-b',
    'border-smoke',
    'dark:border-dark-3',
  ],
  headerCell: [
    'p-5'
  ],
  cell: [
    'py-3',
    'px-5'
  ],
}

const VARIATIONS = {
  default: {
    container: [
      ...COMMON.container,
    ],
    body: [
      ...COMMON.body,
    ],
    head: [
      ...COMMON.head,
      'bg-smoke',
      'dark:bg-dark-2',
      'text-charcoal',
      'dark:text-white',
      'text-left',
      'font-bold'
    ],
    row: [
      ...COMMON.row,
    ],
    cell: [
      ...COMMON.cell,
      'font-effra',
      'text-charcoal',
      'dark:text-white',
      'dark:bg-transparent'
    ],
    headerCell: [
      ...COMMON.headerCell,
    ]
  },
  fixed: {
    container: [
      'table-fixed'
    ],
    body: [],
    head: [
      ''
    ]
  }
}

const SIZES = {
  default: {
    container: [],
    body: [],
    head: [],
    row: [],
    cell: []
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
export const Table = ({ variation, size, children }) => {
  const { 
    container: tableStyles,
    head: headerStyles,
    body: bodyStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <table className={tableStyles.join(' ')}>
    <thead className={headerStyles.join(' ')}>
      {
        React.Children.toArray(children)
          .filter((node) => {
            return node.type.displayName === 'TableHeader'
          })
      }
    </thead>
    <tbody className={bodyStyles.join(' ')}>
      {
        React.Children.toArray(children)
          .filter((node) => {
            return node.type.displayName === 'TableRow'
          }).map((node, index)  => React.cloneElement(node, { 
            variation: variation, size: size, ...node.props, key: `body-row-${index}`
          }))
      }
    </tbody>
  </table>
};

Table.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Table.defaultProps = {
  size: 'default',
  variation: 'default',
};

Table.Header = ({ children, variation, size }) => {
  const { headerCell: cellStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <tr>
    {
      React.Children.toArray(children)
        .filter((node) => {
          return node.type.displayName === 'TableRow'
        }).map((row) => {
          return React.Children.toArray(row.props.children)
            .map((td, index) => <th className={cellStyles.join(' ')} key={`table-header-${index}`}>{td.props.children}</th>)
        })
    }
  </tr>;
};
Table.Header.displayName = 'TableHeader';

Table.Header.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
}

Table.Header.defaultProps = {
  size: 'default',
  variation: 'default'
}

Table.Row = ({  variation, size, children, }) => {
  const { row: rowStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <tr className={rowStyles.join(' ')}>
    {
      React.Children.toArray(children)
        .filter((node) => {
          return node.type.displayName === 'TableCell'
        })
        .map((child, index) => {
          return React.cloneElement(child, { variation: variation, size: size, ...child.props, key: `cell-row-${index}` })
        })
    }
  </tr>;
}
Table.Row.displayName = 'TableRow';

Table.Row.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Table.Row.defaultProps = {
  size: 'default',
  variation: 'default'
}

Table.Cell = ({  variation, size, children, }) => {
  const { cell: cellStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <td className={cellStyles.join(' ')}>
    { children }
  </td>;
};

Table.Cell.displayName = 'TableCell';

Table.Cell.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Table.Cell.defaultProps = {
  size: 'default',
  variation: 'default'
}