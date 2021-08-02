import React from 'react';
import { NumberStatistic } from '.';


export default {
  title: 'Indication/NumberStatistic',
  component: NumberStatistic,
};

const Template = (args) => <NumberStatistic {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <NumberStatistic {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  number: 1337.420,
  label: 'Reputation',
  size: 'default',
  variation: 'default',
};

export const Centered = CenteredTemplate.bind({});
Centered.args = {
  number: 1337.420,
  label: 'Reputation',
  size: 'default',
  variation: 'default',
};

export const WithPercentile = CenteredTemplate.bind({});
WithPercentile.args = {
  number: 1337.420,
  label: 'Reputation',
  percentile: 93,
  size: 'default',
  variation: 'default',
};