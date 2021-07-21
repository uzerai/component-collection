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
  row: [],
  headerCell: [],
  cell: [
    'border-b',
    'border-smoke',
    'dark:border-dark-3',
  ],
  coloredCell: [
    'border-charcoal',
    'border-b',
    'dark:border-dark-2'
  ]
}

export const VARIATIONS = {
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
    container: [ ...COMMON.container, 'table-fixed' ],
  },
  red: {
    row: [ ...COMMON.row, 'bg-red' ],
    cell: [ ...COMMON.coloredCell, 'text-white' ]
  },
  blue: {
    row: [ ...COMMON.row, 'bg-blue' ],
    cell: [ ...COMMON.coloredCell, 'text-white' ]
  },
  green: {
    row: [ ...COMMON.row, 'bg-green' ],
    cell: [ ...COMMON.coloredCell, 'text-white' ]
  }
}

// Currently all tables use default sizes
export const SIZES = {
  default: {
    container: [],
    body: [],
    head: [],
    headerCell: ['p-5'],
    row: [],
    cell: [
      'py-3',
      'px-5'
    ]
  }
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * A table component for containing related react nodes.
 *
 * This table will only display child <Table.Header> and <Table.Row> elements as direct descendants, 
 * all other components will be ignored
 * 
 *  - <Table.Row> elements as direct children will be regarded as part of the <tbody>.
 * 
 *  - Only a single (the first) <Table.Header> element will be rendered as the table's header.
 * 
 *  - This table ensures that all child <Table.*> elements inherit from it's variation/size props,
 *    unless specified on the child <Table.*> element.
 * 
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
          })[0]
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

Table.Header.defaultProps = {}

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

Table.Row.defaultProps = {}

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

Table.Cell.defaultProps = {}