import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '.';
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
    <CardContent variation={'gray'} key={'content'}>
      <SkeletonTextLoader nLines={25} styles={'bg-slate dark:bg-dark-3'}/>
    </CardContent>
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  size: 'default',
  variation: 'default',
  children: [
    <CardContent key={'content'}>
      <div className='py-2'>
        <Card variation={'nested'}>
          <CardContent variation={'nested'}>
            <SkeletonTextLoader nLines={25} />
          </CardContent>
        </Card>
      </div>
    </CardContent>
  ],
};
