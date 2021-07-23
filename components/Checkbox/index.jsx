import PropTypes from 'prop-types';
import React, { useState } from 'react';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';
import { Tooltip } from '../Tooltip';



/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    additional: {},
    container: ['inline-block'],
    body: [
      'select-none',
      'flex',
      'items-center',
      'gap-1'
    ],
    label: [
      'text-sm',
      'dark:text-white',
      'peer-disabled:text-graphite',
      'inline-block',
    ],
  }
}

const SIZES = {
  default: {
    body: [],
    label: [],
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
export const Checkbox = ({ id, name, label, checked: initialChecked, disabled, tooltip, variation, size}) => {
  const [checked, setChecked] = useState(initialChecked);
  const {
    body: bodyStyles,
    label: labelStyles,
    container: containerStyles
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={containerStyles.join(' ')}>
    <div className={'flex gap-2'} >
      <div className={bodyStyles.join(' ')} onClick={() => disabled ? null : setChecked(!checked)} >
        <input type='checkbox' aria-labelledby={`${name}-checkbox-label`} id={id} className='peer inline-block' checked={checked} readOnly disabled={disabled} />
        <label id={`${name}-checkbox-label`} className={labelStyles.join(' ')}>{label}</label>
      </div>
      { tooltip && <Tooltip tooltip={tooltip} variation={'click'}>
        <Symbol symbol={'helpCircle'} size={'fitHeight'} variation={'default'} />
      </Tooltip> }
    </div>
  </div>;
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  tooltip: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  size: 'default',
  variation: 'default'
};