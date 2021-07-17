import React from 'react';
import { SkeletonTextLoader } from './SkeletonTextLoader';


export default {
  title: 'Loading/SkeletonLoader',
  component: SkeletonTextLoader,
};

const Template = (args) => <SkeletonTextLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  nLines: 10,
  children: [],
};
