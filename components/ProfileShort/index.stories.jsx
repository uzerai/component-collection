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

const AvatarHoverTooltipTemplate = (args) => <div className='w-full h-screen flex justify-center items-center dark:text-white bg-smoke'>
  <Tooltip animated
    variation={'nostyles'}
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
  user: {
    username: 'TestUser',
    handle: 'testuser',
    reputation: 1337,
    signal: 69.42,
    impact_percentile: 91,
    impact: 8008
  },
  size: 'default',
  variation: 'default',
};

export const Centered = CenteredTemplate.bind({});
Centered.args = {
  user: {
    username: 'TestUser',
    handle: 'testuser',
    reputation: 1337,
    signal: 69.42,
    impact: 8008,
    impact_percentile: 91,
  },
  size: 'default',
  variation: 'default',
};

export const AvatarHoverTooltip = AvatarHoverTooltipTemplate.bind({});
AvatarHoverTooltip.args = {
  user: {
    username: 'TestUser',
    handle: 'testuser',
    reputation: 1337,
    impact_percentile: 91,
    signal: 69.42,
    impact: 8008
  },
  variation: 'nostyles',
  size: 'default',
}