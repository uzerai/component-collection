import React from 'react';
import { ProfileShort } from '.';


export default {
  title: 'Layout/ProfileShort',
  component: ProfileShort,
};

const Template = (args) => <ProfileShort {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <ProfileShort {...args} />
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