
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';
import { SIZES as TAG_SIZES, VARIATIONS as TAG_VARIATIONS } from '../Tag';


/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    body: []
  }
}

const SIZES = {
  default: {
    body: [],
    select: [],
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
export const Dropdown = ({ options, value: initialValue, isMulti, menuIsOpen, variation, size }) => {
  const [value, setValue] = useState(initialValue);

  return <Select 
    components={{
      Control: Control,
      ClearIndicator: ClearIndicator,
      DropdownIndicator: DropdownIndicator,
      Group: Group,
      GroupHeading: GroupHeading,
      IndicatorsContainer: IndicatorsContainer,
      IndicatorSeparator: IndicatorSeparator,
      Input: Input,
      LoadingIndicator: LoadingIndicator,
      LoadingMessage: LoadingMessage,
      Menu: Menu,
      MenuList: MenuList,
      MenuPortal: MenuPortal,
      NoOptionsMessage: NoOptionsMessage,
      MultiValue: MultiValue,
      MultiValueContainer: MultiValueContainer,
      MultiValueLabel: MultiValueLabel,
      MultiValueRemove: MultiValueRemove,
      Option: Option,
      Placeholder: Placeholder,
      SelectContainer: SelectContainer,
      SingleValue: SingleValue,
      ValueContainer: ValueContainer,
    }}
    styles={{
      multiValue: () => ({ 
        display: 'flex',
        alignItems: 'center', 
        height: '100%'
      }),
      multiValueLabel: () => ({}),
      multiValueRemove: () => ({}),
      input: () => ({}),
    }}
    options={options}
    isMulti={isMulti}
    menuIsOpen={menuIsOpen}
  />
};

const ClearIndicator = props => {
  return <components.ClearIndicator {...props} getStyles={() => null} className='CLEAR-INDICATOR' />
}

const Control = props  => {
  return <components.Control {...props} getStyles={() => null} className='CONTROL p-3 flex border border-smoke dark:border-dark-3 dark:bg-dark-2 focus-within:border-blue rounded shadow-sm shadow-inner cursor-default' />
}

const DropdownIndicator = props => {
  return <components.DropdownIndicator {...props} getStyles={() => null} className='DD-INDICATOR' />
}

const Group = props => {
  return <components.Group {...props} getStyles={() => null} className='GROUP'/>
}

const GroupHeading = props => {
  return <components.GroupHeading {...props} getStyles={() => null} className='GROUP-HEADING'/>
}

const IndicatorsContainer = props => {
  return <components.IndicatorsContainer {...props} getStyles={() => null} className='INDICATORS-CONTAINER flex'/>
}

const IndicatorSeparator = props => {
  return <components.IndicatorSeparator {...props} getStyles={() => null} className='INDICATORS-SEPARATOR'/>
}

const Input = props => {
  return <components.Input {...props} className='INPUT'/>
}

const LoadingIndicator = props => {
  return <components.LoadingIndicator {...props} getStyles={() => null} className='LOADING-INDICATOR'/>
}

const LoadingMessage = props => {
  return <components.LoadingMessage {...props} getStyles={() => null} className='LOADING-MESSAGE'/>
}

const Menu = props => {
  return <components.Menu {...props} getStyles={() => null} className='MENU rounded border border-smoke dark:border-dark-3 z-20 bg-white dark:bg-dark-2 mt-1 overflow-hidden absolute w-full'/>
}

const MenuList = props => {
  return <components.MenuList {...props} getStyles={() => null} className='MENU-LIST font-effra flex flex-col divide-y divide-smoke dark:divide-dark-3 text-charcoal dark:text-white cursor-default'/>
}

const MenuPortal = props => {
  return <components.MenuPortal {...props} getStyles={() => null} className='MENU-PORTAL'/>
}

const NoOptionsMessage = props => {
  return <components.NoOptionsMessage {...props} getStyles={() => null} className='NO-OPTIONS-MSG'/>
}

const MultiValue = props => {
  return <components.MultiValue {...props} />
}

const MultiValueContainer = props => {
  const {
    body: bodyStyles
  } = generateStyles('default', 'small', TAG_VARIATIONS, TAG_SIZES);
  return <div className={'MULTI-VALUE-CONTAINER'.concat(` ${bodyStyles.join(' ')}`)} >
    <components.MultiValueContainer {...props} />
  </div>
}

const MultiValueLabel = props => {
  const { text: textStyles } = generateStyles('default', 'default', TAG_VARIATIONS, TAG_SIZES);

  return <div className={'MULTI-VALUE-LABEL'.concat(` ${textStyles.join(' ')}`)}>
    <components.MultiValueLabel {...props} getStyles={() => {}}/>
  </div>
}

const MultiValueRemove = props => {
  const { close: closeStyles } = generateStyles('default', 'small', TAG_VARIATIONS, TAG_SIZES);

  return <div className={'MULTI-VALUE-REMOVE'.concat(` ${closeStyles.join(' ')}`)}>
    <components.MultiValueRemove {...props} getStyles={() => {}}>
      <Symbol symbol={'cross'} variation='white' size='small' />
    </components.MultiValueRemove>
  </div>
}

const Option = props => {
  return <components.Option {...props} getStyles={() => null} className={`OPTION px-2 pt-2 pb-1.5 hover:bg-steam dark:hover:bg-blue-dark ${props.isSelected ? 'bg-steam dark:bg-dark-2' : ''}`}/>
}

const Placeholder = props => {
  return <components.Placeholder {...props} getStyles={() => null} className='PLACEHOLDER text-smoke dark:text-dark-3 absolute font-varta'/>
}

const SelectContainer = props => {
  return <components.SelectContainer {...props} getStyles={() => null} className='SELECT-CONTAINER relative' />
}

const SingleValue = props => {
  return <components.SingleValue {...props} getStyles={() => null} className='SINGLE-VALUE font-effra text-charcoal dark:text-white absolute'/>
}

const ValueContainer = props => {
  return <components.ValueContainer {...props} getStyles={() => null} className='VALUE-CONTAINER flex flex-grow gap-1'/>
}

Dropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.object,
  isMulti: PropTypes.bool,
  menuIsOpen: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
}


Dropdown.defaultProps = {
  size: 'default',
};