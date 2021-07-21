import React from 'react';
import { MemoryRouter } from 'react-router';
import { TabNavigation, TabNavigationLink } from '.';


export default {
  title: 'Navigation/TabNavigation',
  component: TabNavigation,
};

const Template = (args) => 
  <MemoryRouter initialEntries={['/tab-1']}>
    <TabNavigation {...args} />
  </MemoryRouter>;

export const Default = Template.bind({});
Default.args = {
  tabGroupName: 'exampleTabs',
  size: 'default',
  variation: 'default',
  children: [
    <TabNavigationLink label={'Initial'} linkTo={'/tab-1'} key={'tab-1'}/>,
    <TabNavigationLink label={'Disabled'} linkTo={'/tab-3'} key={'tab-2'} disabled/>,
    <TabNavigationLink label={'Longer label'} linkTo={'/tab-2'} key={'tab-3'}/>,
  ],
};

export const Blue = Template.bind({});
Blue.args = {
  tabGroupName: 'exampleTabs',
  size: 'default',
  variation: 'blue',
  children: [
    <TabNavigationLink label={'Initial'} linkTo={'/tab-1'} key={'tab-1'}/>,
    <TabNavigationLink label={'Disabled'} linkTo={'/tab-3'} key={'tab-2'} disabled/>,
    <TabNavigationLink label={'Longer label'} linkTo={'/tab-2'} key={'tab-3'}/>,
  ],
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  tabGroupName: 'exampleTabs',
  size: 'fixedWidth',
  variation: 'default',
  children: [
    <TabNavigationLink label={'Initial'} linkTo={'/tab-1'} key={'tab-1'}/>,
    <TabNavigationLink label={'Disabled'} linkTo={'/tab-3'} key={'tab-2'} disabled/>,
    <TabNavigationLink label={'Longer label'} linkTo={'/tab-2'} key={'tab-3'}/>,
  ],
};