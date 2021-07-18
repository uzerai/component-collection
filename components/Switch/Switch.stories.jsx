import React from 'react';
import { Switch } from './Switch';


export default {
  title: 'Interactive/Switch',
  component: Switch,
};

const Template = (args) => <div className="flex flex-col gap-3">
  <p className='dark:text-white'>Enabled:</p>
  <Switch {...args} checked={true} />
  <Switch {...args} checked={false} />
  <p className='dark:text-white'>Disabled:</p>
  <Switch {...args} checked={true} disabled={true} />
  <Switch {...args} checked={false} disabled={true} />
</div>;

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'default',
  checked: true,
  disabled: false
};

export const Textless = Template.bind({});
Textless.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'noText',
};

export const Blue = Template.bind({});
Blue.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  name: 'checkbox',
  id: 'checkbox',
  size: 'default',
  variation: 'green',
};
