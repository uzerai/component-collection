import React from 'react';
import { Avatar } from '.';


export default {
  title: 'Layout/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <Avatar {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [],
};

export const Centered = CenteredTemplate.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [],
};

export const Badge = Template.bind({});
Badge.args = {
  size: 'default',
  badges: true,
  variation: 'default',
  children: [],
};