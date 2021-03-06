import React from 'react';
import { HelpText } from '.';


export default {
  title: 'Indication/Helptext',
  component: HelpText,
};

const Template = (args) => <HelpText {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <p key={'helper-text'}>This is some helper-text</p>
  ],
};

export const HasError = Template.bind({});
HasError.args = {
  hasError: true,
  size: 'default',
  variation: 'default',
  children: [
    <p key={'helper-text'}>This is some error-text</p>
  ],
};