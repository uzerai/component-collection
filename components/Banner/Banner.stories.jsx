import React from 'react';
import { Banner } from './Banner';


export default {
  title: 'Indicators/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  onDismiss: undefined,
  children: [
    <>
      <p className='font-bold text-charcoal'>This is a banner!</p>
      <p className='text-charcoal'>It can contain <em>anything</em>.</p>
    </>
  ],
};

export const Green = Template.bind({});
Green.args = {
  size: 'default',
  variation: 'green',
  onDismiss: undefined,
  children: [
    <>
      <p className='font-bold text-charcoal'>This is a banner!</p>
      <p className='text-charcoal'>It can contain <em>anything</em>.</p>
    </>
  ],
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  size: 'default',
  variation: 'red',
  dismissable: true,
  onDismiss: () => {},
  children: [
    <>
      <p className='font-bold text-charcoal'>This is a dismissable banner!</p>
      <p className='text-charcoal'>It can be dismissed and onDismiss do <em>anything</em>.</p>
    </>
  ],
};