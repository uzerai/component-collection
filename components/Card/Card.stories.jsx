import React from 'react';

import { Card } from './Card';
import { CardHeader } from './components/CardHeader';
import { CardFooter } from './components/CardFooter';
import { CardContent } from './components/CardContent';
import { SkeletonTextLoader } from '../SkeletonLoader/SkeletonTextLoader';

export default {
  title: 'Layout/Card',
  component: Card,
  subcomponents: { CardHeader, CardFooter, CardContent }
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <CardHeader>
      <>Something</>
    </CardHeader>,
    <CardFooter>
      <>Footer</>
    </CardFooter>,
    <CardContent>
      <SkeletonTextLoader nLines={25} />
    </CardContent>
  ],
};

export const Gray = Template.bind({});
Gray.args = {
  size: 'default',
  variation: 'gray',
  children: [
    <CardContent variation={'gray'} styles={'py-2'}>
      <SkeletonTextLoader nLines={25} styles={'bg-slate dark:bg-dark-3'}/>
    </CardContent>
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  size: 'default',
  variation: 'default',
  children: [
    <CardContent styles='p-5'>
      <Card variation={'nested'}>
        <CardContent variation={'nested'}>
          <SkeletonTextLoader nLines={25} />
        </CardContent>
      </Card>
    </CardContent>
  ],
};
