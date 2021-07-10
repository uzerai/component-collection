import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  size: 'medium',
  variation: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  size: 'medium',
  variation: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  size: 'medium',
  variation: 'tertiary'
}

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue Button',
  size: 'medium',
  variation: 'blue'
}

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  size: 'medium',
  variation: 'danger'
}