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

const COMMON = {
  body: [
    'flex',
    'justify-start',
  ],
  linkContainer: [
    'group'
  ],
  indicator: [
    'relative',
    '-bottom-0.5',
    'invisible',
    'group-hover:visible',
  ],
  activeIndicator: [
    '!visible',
  ],
  activeText: [],
  navItem: []
}

const VARIATIONS = {
  default: {
    body: [
      ...COMMON.body,
      'border-b',
      'border-smoke',
      'dark:text-white',
      'font-effra'
    ],
    activeIndicator: [
      ...COMMON.activeIndicator,
      'bg-pink',
    ],
    activeText: [
      'font-bold',
    ],
    linkContainer: [ ...COMMON.linkContainer, 'inline-block'],
    indicator: [
      ...COMMON.indicator,
      'relative', 'bg-pink',
    ],
  },
  blue: {
    indicator: [
      ...COMMON.indicator,
      'relative', 'bg-blue'
    ],
    activeIndicator: [
      ...COMMON.activeIndicator,
      'bg-blue'
    ]
  }
}

const SIZES = {
  default: {
    body: [],
    activeIndicator: [],
    linkContainer: [],
    indicator: ['h-1'],
    navItem: [
      'flex-grow',
    ]
  },
  fixedWidth: {
    navItem: [],
  },
  fullWidthIndicator: {
    linkContainer: [...COMMON.linkContainer]
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
export const TabNavigation = ({ tabGroupName, variation, size, children }) => {
  const { body: bodyStyles } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <nav aria-labelledby={`${tabGroupName}-label`} className={bodyStyles.join(' ')}>
    {/* We don't want to display this, but want our screen-reader users to be able to identify this navigation component */}
    <label id={`${tabGroupName}-label`} className={'hidden'}>{tabGroupName}</label>
    {
      React.Children.toArray(children)
        .filter(node => node.type.name === TabNavigationLink.name)
        .map((node) => React.cloneElement(node, { variation: variation, size: size, ...node.props }))
    }
  </nav>
};

TabNavigation.propTypes = {
  tabGroupName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

TabNavigation.defaultProps = {
  size: 'default',
  variation: 'default',
};

export const TabNavigationLink = ({ label, linkTo, disabled, variation, size }) => {
  const {
    navItem: navItemStyles,
    linkContainer: containerStyles,
    indicator: indicatorStyles,
    activeIndicator: activeIndicatorStyles,
    activeText: activeTextStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);
  const linkStyles = ''.concat(match ? activeTextStyles.join(' '): '')
    .concat(` ${disabled ? 'cursor-default text-steam dark:text-dark-3' : ''}`);

  let match = useRouteMatch({
    path: linkTo,
    exact: true
  })

  return <div className={navItemStyles.join(' ')}>
    <span className={containerStyles.join(' ')}>
      <Link to={linkTo} className={linkStyles}>
        {label}
      </Link>
      {/* This is the indication bar which is displayed at the bottom of the navigation line when hovered/active */}
      <div className={ disabled ?  'hidden'
        : indicatorStyles.join(' ').concat(` ${ match ? activeIndicatorStyles.join(' ') : ''}`)} />
    </span>
  </div>
};

TabNavigationLink.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
}
TabNavigationLink.defaultProps = {
  disabled: false,
}