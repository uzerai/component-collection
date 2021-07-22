import React from 'react';
import Select from 'react-select';
import { Dropdown } from '.';


export default {
  title: 'Interactive/Dropdown',
  component: Dropdown,
};

const options = [
  { value: 'option-1', label: 'Option 1'},
  { value: 'option-2', label: 'Option 2'},
  { value: 'option-3', label: 'Option 3'},
  { value: 'option-4', label: 'Option 4'},
  { value: 'option-5', label: 'Option 5'},
  { value: 'option-6', label: 'Option 6'},
]

const Template = (args) => 
  <div className={'flex flex-col gap-6'}>
    <Dropdown {...args} />
    <Dropdown {...args} isMulti={true}/>
    <Dropdown />
    <Select options={options} />
    <Select options={options} isMulti />
  </div>

export const Default = Template.bind({});
Default.args = {
  id: 'example-dropdown',
  name: 'example-dropdown',
  initialSelected: 'FIRST VALUE',
  size: 'default',
  variation: 'default',
  options: options
};