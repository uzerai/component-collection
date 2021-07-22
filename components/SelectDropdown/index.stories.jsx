import React from 'react';
import { SelectDropdown } from '.';


export default {
  title: 'Interactive/SelectDropdown',
  component: SelectDropdown,
};

const options = [
  { label: 'Group 1 (green tags)',
    options: [
      { value: 'group-option-1', label: 'Group Option 1', tagVariation: 'green' },
      { value: 'group-option-2', label: 'Group Option 2', tagVariation: 'green' },
    ]},
  { value: 'option-1', label: 'Option 1', symbol: 'check'},
  { value: 'option-2', label: 'Option 2', group: 'a'},
  { value: 'option-3', label: 'Option 3', group: 'a'},
  { value: 'option-4', label: 'Option 4'},
  { label: 'Group 2 (blue tags)',
    options: [
      { value: 'group-2-option-1', label: 'Group 2 Option 1', tagVariation: 'blue'},
      { value: 'group-2-option-2', label: 'Group 2 Option 2', tagVariation: 'blue'},
    ]},
  { value: 'option-5', label: 'Option 5'},
  { value: 'option-6', label: 'Option 6'},
];

const Template = (args) => <div className={'flex flex-col gap-10'}>
  <div className="">
    <p className="text-2xl pb-3 dark:text-white">Single-select</p>
    <SelectDropdown {...args}/>
  </div>
  <div className="">
    <p className="text-2xl pb-3 dark:text-white">Multi-select</p>
    <SelectDropdown {...args} variation={'multi'}/>
  </div>
  <div className="">
    <p className="text-2xl pb-3 dark:text-white">Multi-select custom start value / colours</p>
    <SelectDropdown {...args}
      variation={'multi'}
      value={[
        { value: 'option-5', label: 'Option 5' },
        { value: 'group-2-option-1', label: 'Group 2 Option 1', tagVariation: 'blue'},
        { value: 'option-doesn\'t exist', label: 'Not in options list :)', tagVariation: 'red' }
      ]}
    />
  </div>
  <div className="">
    <p className="text-2xl pb-3 dark:text-white">No options</p>
    <SelectDropdown />
  </div>
</div>

export const Default = Template.bind({});
Default.args = {
  id: 'example-dropdown',
  name: 'example-dropdown',
  placeholder: 'Some placeholder text',
  size: 'default',
  variation: 'default',
  options: options
};