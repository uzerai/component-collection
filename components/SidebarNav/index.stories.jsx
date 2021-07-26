import React from 'react';
import { SidebarNav, SidebarNavLink } from '.';
import { Symbol } from '../Symbol';


export default {
  title: 'Navigation/SideNavigation',
  component: SidebarNav,
};

const Template = (args) => <SidebarNav {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <SidebarNav {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <SidebarNavLink label={'Menu Item 1'} linkTo={'/match-1'} key={'match-1'}/>,
    <SidebarNavLink label={'Menu Item 2'} linkTo={'/match-2'} key={'match-2'}/>,
    <SidebarNavLink label={'Menu Item 3'} linkTo={'/match-3'} key={'match-3'}/>
  ],
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: <div className='flex gap-3'>
    <Symbol symbol='search' />
    <label>Menu header</label>
  </div>,
  size: 'default',
  variation: 'default',
  children: [
    <SidebarNavLink label={'Menu Item 1'} linkTo={'/match-1'} key={'match-1'}/>,
    <SidebarNavLink label={'Menu Item 2'} linkTo={'/match-2'} key={'match-2'}/>,
    <SidebarNavLink label={'Menu Item 3'} linkTo={'/match-3'} key={'match-3'}/>
  ],
};

export const Centered = CenteredTemplate.bind({});
Centered.args = {
  size: 'default',
  variation: 'default',
  children: [
    <SidebarNavLink label={'Menu Item 1'} linkTo={'/match-1'} key={'match-1'}/>,
    <SidebarNavLink label={'Menu Item 2'} linkTo={'/match-2'} key={'match-2'}/>,
    <SidebarNavLink label={'Menu Item 3'} linkTo={'/match-3'} key={'match-3'}/>
  ],
};