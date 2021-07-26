import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';




/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    additional: {},
    body: [
      'rounded-sm',
      'shadow',
      'dark:text-white',
      'overflow-hidden',
      'dark:border-dark-3',
      'dark:border'
    ],
    listItem: [
      'group',
      'flex-row',
      'relative',
      'cursor-pointer',
      'bg-pink-salmon',
      'dark:bg-dark-2',
    ],
    label: [
      'block',
      'py-3',
      'px-5',
      'text-l',
      'font-bold',
      'font-effra',
      'text-pink',
      'dark:text-pink-light',
    ],
    indicator: [
      'absolute',
      'h-full',
      'border-l-4',
      'border-pink',
    ],
    indicatorActive: [
      'absolute',
      'group-hover:border-l-4',
      'border-slate',
      'dark:border-charcoal',
      'h-full',
    ],
    header: [
      'text-charcoal',
      'font-effra',
      'dark:text-white',
      'py-3',
      'px-5'
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
 * Simple component for side navigation.
 */
export const SidebarNav = ({ header, variation, size, children }) => {
  const { body: bodyStyles, header: headerStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <nav className={bodyStyles.join(' ')}>
    { header && <div className={headerStyles.join(' ')}>
      {header}
    </div> }
    <ul className='min-w-full flex-col'>
      {children}
    </ul>
  </nav>
};

SidebarNav.propTypes = {
  header: PropTypes.oneOf([ PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

SidebarNav.defaultProps = {
  size: 'default',
};

export const SidebarNavLink = ({label, linkTo, disabled, variation, size}) => {
  const {
    listItem: listItemStyles,
    label: labelStyles,
    indicator: indicatorStyles,
    indicatorActive: indicatorActiveStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  let match = useRouteMatch({
    path: linkTo,
    exact: true,
  })

  return <li className={listItemStyles.join(' ')}>
    <figure className={`${match ? indicatorStyles.join(' ') : indicatorActiveStyles.join(' ')}`} />
    <Link to={linkTo} className={labelStyles.join(' ')}>
      {label}
    </Link>
  </li>
}

SidebarNavLink.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
}
SidebarNavLink.defaultProps = {
  disabled: false,
}