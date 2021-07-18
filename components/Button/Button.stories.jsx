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
  variation: 'primary'
};

export const PrimaryWithLogo = Template.bind({});
PrimaryWithLogo.args = {
  label: <TrashIcon className="w-6 fill-current" />,
  variation: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variation: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  variation: 'tertiary'
}

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue Button',
  variation: 'blue'
}

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variation: 'danger'
}