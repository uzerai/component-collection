import React from 'react';
import { Severity } from '.';


export default {
  title: 'Indication/Severity',
  component: Severity,
};

const Template = (args) => <Severity {...args} />;

export const None = Template.bind({});
None.args = {
  size: 'default',
  rating: 'none',
  children: [],
};

export const Low = Template.bind({});
Low.args = {
  size: 'default',
  rating: 'low',
  children: [],
};

export const LowWithScore = Template.bind({});
LowWithScore.args = {
  size: 'default',
  rating: 'low',
  score: 0.6,
  children: [],
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'default',
  rating: 'medium',
  children: [],
};

export const High = Template.bind({});
High.args = {
  size: 'default',
  rating: 'high',
  children: [],
};

export const Critical = Template.bind({});
Critical.args = {
  size: 'default',
  rating: 'critical',
  children: [],
};
