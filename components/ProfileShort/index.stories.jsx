import React from 'react';
import { ProfileShort } from '.';
import { Avatar } from '../Avatar';
import { Tooltip } from '../Tooltip';


export default {
  title: 'Complex/ProfileShort',
  component: ProfileShort,
};

const Template = (args) => <ProfileShort {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <ProfileShort {...args} />
</div>;

const AvatarHoverTooltipTemplate = (args) => <div className='w-full h-screen flex justify-center items-center dark:text-white'>
  <Tooltip variation='custom' animated
    visible={true}
    interactive={false}
    placement='right'
    trigger='click'
    tooltip={<ProfileShort {...args} />}
    offset= {[0, 20]} >
    <Avatar badges={true} src='' />
  </Tooltip>
</div>

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

export const AvatarHoverTooltip = AvatarHoverTooltipTemplate.bind({});
AvatarHoverTooltip.args = {
  size: 'default',
  variation: 'default',
  children: [],
}