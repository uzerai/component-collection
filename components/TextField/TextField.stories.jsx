import React from 'react';
import { Symbol } from '../Symbol/Symbol';
import { TextField } from './TextField';


export default {
  title: 'Interactive/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Input',
  placeholder: 'Some placeholder...',
  size: 'default',
  variation: 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Input',
  placeholder: 'Some placeholder...',
  size: 'default',
  disabled: true,
  variation: 'default',
};

export const WithSymbol = Template.bind({});
WithSymbol.args = {
  name: 'Input',
  placeholder: 'Some placeholder...',
  size: 'default',
  disabled: false,
  symbol: <Symbol symbol={'search'} variation={'transparent'} />,
  variation: 'default',
};