import React from 'react';
import { Separator as Separator } from '.';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { SkeletonTextLoader } from '../SkeletonLoader/SkeletonTextLoader';


export default {
  title: 'Layout/Separator',
  component: Separator,
};

const Template = (args) => <div className='flex flex-col gap-5 dark:text-white'>
  <div>
    <p className='pb-5'>Default:</p>
    <Separator { ...args} label={null} />
  </div>
  <div>
    <p className='pb-5'>With label:</p>
    <Separator {...args} />
  </div>
</div>

const InCardTemplate = (args) => <Card>
  <CardHeader key={'header'}>
    <p>Header</p>
  </CardHeader>
  <CardFooter key={'footer'}>
    <p>Footer</p>
  </CardFooter>
  <CardContent key={'content'} size={'noMargin'}>
    <div className={'px-4 pt-3'}>
      <SkeletonTextLoader nLines={5} />
    </div>
    <Separator { ...args } />
    <div className={'px-4 pb-3'}>
      <SkeletonTextLoader nLines={5} />
    </div>
  </CardContent>
</Card>

export const Default = Template.bind({});
Default.args = {
  label: 'LABEL',
  size: 'default',
  variation: 'default',
};

export const InCard = InCardTemplate.bind({});
InCard.args = {
  label: 'in-card separator',
  size: 'default',
  variation: 'default',
};