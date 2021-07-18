import React from 'react';
import { SkeletonTextLoader } from '../SkeletonLoader/SkeletonTextLoader';
import { Card, CardContent, CardFooter, CardHeader } from './Card';



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
    <CardHeader key={'header'}>
      <>Something</>
    </CardHeader>,
    <CardFooter key={'footer'}>
      <>Footer</>
    </CardFooter>,
    <CardContent key={'content'}>
      <SkeletonTextLoader nLines={25} />
    </CardContent>
  ],
};

export const Gray = Template.bind({});
Gray.args = {
  size: 'default',
  variation: 'gray',
  children: [
    <CardContent variation={'gray'} styles={'py-2'} key={'content'}>
      <SkeletonTextLoader nLines={25} styles={'bg-slate dark:bg-dark-3'}/>
    </CardContent>
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  size: 'default',
  variation: 'default',
  children: [
    <CardContent styles='p-5' key={'content'}>
      <Card variation={'nested'}>
        <CardContent variation={'nested'}>
          <SkeletonTextLoader nLines={25} />
        </CardContent>
      </Card>
    </CardContent>
  ],
};
