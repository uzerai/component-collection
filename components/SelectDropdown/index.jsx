import PropTypes from 'prop-types';
import React from 'react';
import Select, { components } from 'react-select';
import { generateStyles } from '../../shared/variationsHelper';
import { Symbol } from '../Symbol';
import { SIZES as TAG_SIZES, VARIATIONS as TAG_VARIATIONS } from '../Tag';
import './selectDropdown.css';

/**
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const COMMON = {
  clearIndicator: [ 'cursor-pointer' ],
  control: [
    'flex',
    'border',
    'border-smoke',
    'dark:border-dark-3',
    'dark:bg-dark-2',
    'focus-within:border-blue',
    'rounded',
    'shadow-sm',
    'shadow-inner',
    'cursor-default',
  ],
  dropIndicator: [],
  group: [],
  groupHeading: ['text-sm', 'text-stone'],
  indicatorsContainer: ['flex', 'gap-2'],
  indicatorsSeparator: ['border-l', 'border-smoke', 'dark:border-dark-3'],
  input: ['dark:caret-white'],
  loadingIndicator: [],
  loadingMessage: [],
  menu: [
    'rounded',
    'border',
    'border-smoke',
    'dark:border-dark-3',
    'z-20',
    'bg-white',
    'dark:bg-dark-2',
    'overflow-hidden',
    'absolute',
  ],
  menuList:[
    'divide-y',
    'divide-smoke',
    'dark:divide-dark-3',
    'font-effra',
    'flex',
    'flex-col',
    'text-charcoal',
    'dark:text-white',
    'cursor-default'
  ],
  menuPortal: [],
  noOptionsMsg: [
    'text-center',
    'text-stone',
    'dark:text-steam'
  ],
  // NOTE: MultiValue & related styles are handled in-component, as they inherit from the Tag component styling.
  multiValue: [],
  multiValueContainer: [],
  multiValueLabel: [],
  multiValueRemove: [],
  option: [
    'hover:bg-steam',
    'dark:hover:bg-blue-dark'
  ],
  selectedOption: [],
  placeholder: ['absolute', 'text-center', 'text-smoke', 'dark:text-dark-3', 'font-varta', 'select-none'],
  selectContainer: ['relative'],
  singleValue: ['font-effra', 'text-charcoal', 'dark:text-white', 'absolute'],
  valueContainer: ['flex', 'flex-grow', 'flex-wrap', 'gap-1'],
};

const VARIATIONS = {
  default: {
    additional: {
      optionSelectedSymbol: 'check',
      dropdownIndicatorSymbol: 'chevronDown',
      dropdownIndicatorActiveSymbol: 'chevronUp',
      clearIndicatorSymbol: 'cross',
      tagVariation: 'pink'
    },
    clearIndicator: [...COMMON.clearIndicator],
    control: [...COMMON.control],
    dropIndicator: [...COMMON.dropIndicator],
    group: [...COMMON.group],
    groupHeading: [...COMMON.groupHeading],
    indicatorsContainer: [...COMMON.indicatorsContainer],
    indicatorsSeparator: [...COMMON.indicatorsSeparator],
    input: [...COMMON.input],
    loadingIndicator: [...COMMON.loadingIndicator],
    loadingMessage: [...COMMON.loadingMessage],
    menu: [...COMMON.menu],
    menuList:[...COMMON.menuList],
    menuPortal: [...COMMON.menuPortal],
    noOptionsMsg: [...COMMON.noOptionsMsg],
    multiValue: [...COMMON.multiValue],
    multiValueContainer: [...COMMON.multiValueContainer],
    multiValueLabel: [...COMMON.multiValueLabel],
    multiValueRemove: [...COMMON.multiValueRemove],
    option: [...COMMON.option],
    selectedOption: [ ...COMMON.selectedOption, 'bg-steam', 'dark:bg-dark-2' ],
    placeholder: [...COMMON.placeholder],
    selectContainer: [...COMMON.selectContainer],
    singleValue: [...COMMON.singleValue],
    valueContainer: [...COMMON.valueContainer]
  },
  multi: {
    ...COMMON,
    additional: {
      optionSelectedSymbol: 'check',
      dropdownIndicatorSymbol: 'chevronDown',
      dropdownIndicatorActiveSymbol: 'chevronUp',
      clearIndicatorSymbol: 'cross',
      tagVariation: 'pink',
      isMulti: true,
    },
  }
}

const SIZES = {
  default: {
    additional: [],
    clearIndicator: [],
    control: ['p-2',],
    dropIndicator: [],
    group: ['mb-2'],
    groupHeading: [ 'm-1', 'px-1' ],
    indicatorsContainer: [],
    indicatorsSeparator: [],
    input: [],
    loadingIndicator: [],
    loadingMessage: [],
    menu: ['w-full', 'mt-1'],
    menuList:[],
    menuPortal: [],
    noOptionsMsg: ['w-full', 'py-2'],
    multiValue: [],
    multiValueContainer: [],
    multiValueLabel: [],
    multiValueRemove: [],
    option: ['px-2', 'pt-2', 'pb-1.5'],
    placeholder: ['mt-1'],
    selectContainer: [],
    singleValue: [],
    valueContainer: []
  }
}

/**
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default Select dropdown component. This component can be either multi-select or single-select.
 */
export const SelectDropdown = ({ placeholder, options, value: initialValue, onChange: onChangeArg, menuIsOpen, disabled, searchable, variation, size }) => {
  const {
    clearIndicator: clearIndicatorStyles,
    control: controlStyles,
    dropIndicator: dropIndicatorStyles,
    group: groupStyles,
    groupHeading: groupHeadingStyles,
    indicatorsContainer: indicatorsContainerStyles,
    indicatorsSeparator: indicatorsSeparatorStyles,
    input: inputStyles,
    loadingIndicator: loadingIndicatorStyles, // eslint-disable-line
    loadingMessage: loadingMessageStyles, // eslint-disable-line
    menu: menuStyles,
    menuList: menuListStyles,
    menuPortal: menuPortalStyles, // eslint-disable-line
    noOptionsMsg: noOptionsMsgStyles,
    option: optionStyles,
    selectedOption: selectedOptionStyles,
    placeholder: placeholderStyles,
    selectContainer: selectContainerStyles,
    singleValue: singleValueStyles,
    valueContainer: valueContainerStyles,
    additional: {
      optionSelectedSymbol, // eslint-disable-line
      dropdownIndicatorSymbol,
      dropdownIndicatorActiveSymbol,
      clearIndicatorSymbol,
      tagVariation,
      isMulti,
    }
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  //  TODO: Remove / use library / move to helper.
  const generateUUID = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  // Necessary for the removal-animation on multi-value selected values (only when `isMulti === true`)
  const SELECT_UID = `__SELECT_${generateUUID()}`;

  const onChange = (data, { action, option, removedValue, name }) => {
    // This handles the animation of removing a value when the component is multi valued.
    if (action === 'remove-value') {
      // The divId is injected into all options on component load. See injectIdOptions() or optionId().
      const valueContainer = document.querySelector(`#${removedValue.divId}`); //select the div of the chosen value via divId
      const parent = valueContainer.parentElement; //
      const clone = valueContainer.cloneNode(true);
      if (clone) {
        // Add event listener to remove the cloned element on animation-end.
        clone.addEventListener('animationend', () => {
          parent.removeChild(clone);
        })
        // Add animated CSS class.
        clone.classList.add('optionTagOut');
        parent.insertBefore(clone, valueContainer);
      }
    }

    // Also calls the functionality provided as `onChange` prop.
    onChangeArg(data, { action, option, removedValue, name});
  }
  
  /**
   *  ######################################################
   *  #               Component overrides                  #
   *  ######################################################
   */

  const ClearIndicator = props => {
    return <components.ClearIndicator {...props} getStyles={() => null} className={clearIndicatorStyles.join(' ')}>
      <Symbol symbol={clearIndicatorSymbol} variation='default' size='fitHeight' />
    </components.ClearIndicator>
  }
  
  const Control = props  => {
    return <components.Control {...props} getStyles={() => null} className={controlStyles.join(' ')} />
  }
  
  const DropdownIndicator = props => {
    return <components.DropdownIndicator {...props} getStyles={() => null} className={dropIndicatorStyles}>
      <Symbol symbol={props.isFocused ? dropdownIndicatorActiveSymbol : dropdownIndicatorSymbol } size='fitHeight' variation='default' />
    </components.DropdownIndicator>
  }
  
  const Group = props => {
    return <components.Group {...props} getStyles={() => null} className={groupStyles.join(' ')} />
  }
  
  const GroupHeading = props => {
    return <components.GroupHeading {...props} getStyles={() => null} className={groupHeadingStyles.join(' ')} />
  }
  
  const IndicatorsContainer = props => {
    return <components.IndicatorsContainer {...props} getStyles={() => null} className={indicatorsContainerStyles.join(' ')} />
  }
  
  const IndicatorSeparator = props => {
    return <components.IndicatorSeparator {...props} getStyles={() => null} className={indicatorsSeparatorStyles.join(' ')} />
  }
  
  const Input = props => {
    return <components.Input {...props} className={inputStyles.join(' ')} />
  }
  
  const LoadingIndicator = props => {
    return <components.LoadingIndicator {...props} getStyles={() => null} className='LOADING-INDICATOR' />
  }
  
  const LoadingMessage = props => {
    return <components.LoadingMessage {...props} getStyles={() => null} className='LOADING-MESSAGE' />
  }
  
  const Menu = props => {
    return <components.Menu {...props} getStyles={() => null} className={menuStyles.join(' ')} />
  }
  
  const MenuList = props => {
    return <components.MenuList {...props} getStyles={() => null} className={menuListStyles.join(' ')} />
  }
  
  const MenuPortal = props => {
    return <components.MenuPortal {...props} getStyles={() => null} className='MENU-PORTAL' />
  }
  
  const NoOptionsMessage = props => {
    return <div className={noOptionsMsgStyles.join(' ')}>
      <components.NoOptionsMessage {...props} getStyles={() => null} className='NO-OPTIONS-MSG' />
    </div>
  }
  
  const MultiValue = props => {
    return <components.MultiValue {...props} className='MULTI-VALUE' />
  }
  
  const MultiValueContainer = props => {
    // Tags in the Select can now adhere to the Tag styling from the Tag component!
    const { body: bodyStyles } = generateStyles((props.data?.tagVariation || tagVariation), 'default', TAG_VARIATIONS, TAG_SIZES);

    return <div className={`MULTI-VALUE-CONTAINER ${bodyStyles.join(' ')}`} id={props.data.divId}>
      <components.MultiValueContainer {...props} />
    </div>
  }
  
  const MultiValueLabel = props => {
    const { text: textStyles } = generateStyles((props.data?.tagVariation || tagVariation), 'default', TAG_VARIATIONS, TAG_SIZES);
  
    return <div className={`MULTI-VALUE-LABEL ${textStyles.join(' ')}`}>
      <components.MultiValueLabel {...props} getStyles={() => {}}/>
    </div>
  }
  
  const MultiValueRemove = props => {
    const { close: closeStyles } = generateStyles((props.data?.tagVariation || tagVariation), 'default', TAG_VARIATIONS, TAG_SIZES);
  
    return <div className={`MULTI-VALUE-REMOVE ${closeStyles.join(' ')}`}>
      <components.MultiValueRemove {...props} getStyles={() => {}}>
        <Symbol symbol={'cross'} variation='white' size='small' />
      </components.MultiValueRemove>
    </div>
  }
  
  const Option = props => {
    return <div className={`${optionStyles.join(' ')} ${props.isSelected ? selectedOptionStyles.join(' ') : ''}`}>
      <components.Option {...props} getStyles={() => null} />
      {/* TODO: Allow images to be rendered inline with data. */}
      {/* {props.data.imageUrl ? <Symbol symbol={props.data.symbol} size={'fitHeight'} /> : null } */}
    </div>
  }
  
  const Placeholder = props => {
    return <components.Placeholder {...props} getStyles={() => null} className={placeholderStyles.join(' ')} />
  }
  
  const SelectContainer = props => {
    return <components.SelectContainer {...props} getStyles={() => null} className={selectContainerStyles.join(' ')} />
  }
  
  const SingleValue = props => {
    return <components.SingleValue {...props} getStyles={() => null} className={singleValueStyles.join(' ')} />
  }
  
  const ValueContainer = props => {
    return <components.ValueContainer {...props} getStyles={() => null} className={valueContainerStyles.join(' ')} />
  }

  /**
   * #############################################################################
   * #                         Option value injection                            #
   * #                            (for animations)                               #
   * #############################################################################
   */

  const optionID = option => `${SELECT_UID}_${option.value}__`;

  const injectIdOptions = (options) => {
    return options?.map(option => {
      // group option-objects have no value
      if (!option?.value) {
        // Sub-calling the injectIdOptions if the option was a grouping.
        return {...option, options: injectIdOptions(option.options)};
      }
      // Otherwise we return same object with a divId.
      return {... option, divId: optionID(option)}
    })
  }

  const injectedOptions = injectIdOptions(options);
  const injectedInitialValue = initialValue?.map(option => {
    const existingID = injectedOptions.find(injected => injected.value === option.value)?.divId;
    if (existingID) {
      return {...option, divId: existingID}
    } else {
      return {...option, divId: optionID(option) }
    }
  })

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
    // Styles are overriden here, as even with component override they are passed some default styling.
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
    isSearchable={searchable}
    // TODO: when disabled, disallow removal of initial values
    isDisabled={disabled}
    placeholder={placeholder}
    defaultValue={injectedInitialValue}
    onChange={onChange}
    options={injectedOptions}
    isMulti={isMulti}
    menuIsOpen={menuIsOpen}
  />
};

SelectDropdown.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string.isRequired,
      tagVariation: PropTypes.oneOf(Object.keys(TAG_VARIATIONS)),
      imageUrl: PropTypes.string,
    })),
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string.isRequired,
      tagVariation: PropTypes.oneOf(Object.keys(TAG_VARIATIONS)),
      imageUrl: PropTypes.string,
    })
  ]),
  searchable: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string, // Not required if the option is an options group.
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string.isRequired,
    tagVariation: PropTypes.oneOf(Object.keys(TAG_VARIATIONS)),
    imageUrl: PropTypes.string,
  })),
  menuIsOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
}

SelectDropdown.defaultProps = {
  menuIsOpen: undefined,
  disabled: false,
  searchable: false,
  variation: 'default',
  size: 'default',
};