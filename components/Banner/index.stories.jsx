import React from 'react';
import { Banner } from '.';


export default {
  title: 'Indication/Banner',
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
      <p className='font-bold text-charcoal dark:text-white'>This is a banner!</p>
      <p className='text-stone'>It can contain <em>anything</em>.</p>
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
      <p className='font-bold text-charcoal dark:text-white'>This is a banner!</p>
      <p className='text-stone'>It can contain <em>anything</em>.</p>
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
      <p className='font-bold text-charcoal dark:text-white'>This is a banner!</p>
      <p className='text-stone'>It can contain <em>anything</em>.</p>
    </>
  ],
};