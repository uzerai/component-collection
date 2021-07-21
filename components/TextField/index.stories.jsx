import React from 'react';
import { TextField } from '.';
import { Symbol } from '../Symbol';


export default {
  title: 'Interactive/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'text-field',
  name: 'text-field',
  size: 'default',
  variation: 'default',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: 'text-field',
  name: 'text-field',
  placeholder: 'Placeholder text ...',
  size: 'default',
  variation: 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'text-field',
  name: 'text-field',
  placeholder: 'Placeholder text ...',
  size: 'default',
  disabled: true,
  variation: 'default',
};

export const WithSymbol = Template.bind({});
WithSymbol.args = {
  id: 'text-field',
  name: 'text-field',
  size: 'default',
  disabled: false,
  symbol: <Symbol symbol={'search'} />,
  variation: 'default',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  id: 'text-field',
  name: 'text-field',
  maxLength: 50,
  size: 'default',
  disabled: false,
  symbol: <Symbol symbol={'check'} />,
  variation: 'default',
};