import React from 'react';
import TrashIcon from './assets/remove-delete-trash-cancel.svg';
import { Button } from './Button';


export default {
  title: 'Interactive/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  size: 'default',
  variation: 'primary'
};

export const PrimaryWithLogo = Template.bind({});
PrimaryWithLogo.args = {
  label: <TrashIcon class="w-6 fill-current" />,
  size: 'default',
  variation: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  size: 'default',
  variation: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  size: 'default',
  variation: 'tertiary'
}

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue Button',
  size: 'default',
  variation: 'blue'
}

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  size: 'default',
  variation: 'danger'
}