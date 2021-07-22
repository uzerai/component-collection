import React from 'react';
import { Checkbox } from '.';


export default {
  title: 'Interactive/Checkbox',
  component: Checkbox,
};

const Template = (args) => <div className={''}>
  <div className={'pb-2'} >
    <p className={'text-2xl dark:text-white pb-2'}>Unchecked</p>
    <Checkbox {...args} />
  </div>
  <div className={'pb-2'} >
    <p className={'text-2xl dark:text-white pb-2'}>Disabled</p>
    <Checkbox {...args} disabled/>
  </div>
  <div className={'pb-2'} >
    <p className={'text-2xl dark:text-white pb-2'}>Checked</p>
    <Checkbox {...args} checked/>
  </div>
  <div className={'pb-2'} >
    <p className={'text-2xl dark:text-white pb-2'}>Checked-Disabled</p>
    <Checkbox {...args} checked disabled/>
  </div>
</div>

export const Default = Template.bind({});
Default.args = {
  id: 'example-checkbox',
  name: 'example-checkbox',
  size: 'default',
  variation: 'default',
  label: <p>Checkbox!</p>,
  children: [],
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: 'example-checkbox',
  name: 'example-checkbox',
  size: 'default',
  tooltip: 'A tooltip!',
  variation: 'default',
  label: <p>Checkbox!</p>,
  children: [],
};