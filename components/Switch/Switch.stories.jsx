import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'Interactive/Switch',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'default',
  checked: false,
  disabled: false
};

export const On = Template.bind({});
On.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'default',
  checked: true,
  disabled: false
};

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'default',
  checked: true,
  disabled: true
};

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'default',
  checked: false,
  disabled: true
};


export const DisabledOnBlue = Template.bind({});
DisabledOnBlue.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'blue',
  checked: true,
  disabled: true
};

export const OnGreen = Template.bind({});
OnGreen.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'green',
  checked: true,
  disabled: false
};

