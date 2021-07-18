import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../Card/Card';
import { SkeletonTextLoader } from '../SkeletonLoader/SkeletonTextLoader';
import { Timeline } from './Timeline';

export default {
  title: 'Layout/Timeline',
  component: Timeline,
};

const Template = (args) => <Timeline {...args} />;
const DefaultContent = () => <p 
  className="p-10 border border-steam dark:border-dark-3 rounded bg-white dark:bg-dark-1 dark:text-white">
    Some random content
</p>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Timeline.Head key="timeline-header">
      <Card>
        <CardContent>
          <p className="font-thin">This is the Timeline.Head</p>
        </CardContent>
      </Card>
    </Timeline.Head>,
    <Timeline.Tail key="timeline-tail">
      <Card>
        <CardContent>
          <p className="font-thin">This is the Timeline.Tail</p>
        </CardContent>
      </Card>
    </Timeline.Tail>,
    <Timeline.Item key="custom-content">
      <DefaultContent />
    </Timeline.Item>,
    <Timeline.Item key="custom-content" variation='noIndicator'>
      <DefaultContent />
    </Timeline.Item>,
    <Timeline.Item key="custom-content" variation='smallIndicator'>
      <DefaultContent />
    </Timeline.Item>,
    <Timeline.Item key="custom-content" variation={'interwoven'}>
      <DefaultContent />
    </Timeline.Item>,
  ],
};

export const NoIndicator = Template.bind({});
NoIndicator.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Timeline.Item key="custom-content">
      <Timeline.Indicator><></></Timeline.Indicator>
      <DefaultContent />
    </Timeline.Item>,
  ],
};

export const Interwoven = Template.bind({});
Interwoven.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Timeline.Item key="custom-content" variation={'interwoven'}>
      <DefaultContent />
    </Timeline.Item>,
  ],
};

export const CardsTimeline = Template.bind({});
CardsTimeline.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Timeline.Head key="timeline-header">
      <Card>
        <CardHeader>
          <p className="font-bold">Timeline Head</p>
        </CardHeader>
        <CardContent>
          <p className="font-thin">This is the Timeline.Head</p>
        </CardContent>
      </Card>
    </Timeline.Head>,
    <Timeline.Tail key="timeline-tail">
      <Card>
        <CardFooter>
          <p className="font-bold">Timeline Tail</p>
        </CardFooter>
        <CardContent>
          <p className="font-thin">This is the Timeline.Tail</p>
        </CardContent>
      </Card>
    </Timeline.Tail>,
    <Timeline.Item key="header-content">
      <Card>
        <CardHeader>
          <p className="font-bold">Header and Content</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item key="content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item key="gray">
      <Card>
        <CardContent variation="gray">
          <SkeletonTextLoader nLines={5} styles="bg-slate dark:bg-dark-3" />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item key="footer-content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
        <CardFooter>
          <p className="font-bold text-sm">Footer and Content</p>
        </CardFooter>
      </Card>
    </Timeline.Item>,
  ],
};

export const CustomIndicator = Template.bind({});
CustomIndicator.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Timeline.Item key="content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item variation={'smallIndicator'} key={'small-indicator'}>
      <Card>
        <CardHeader>
          <p className="font-bold">Small indicator</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item key={'custom-provided-indicator'}>
      <Timeline.Indicator>
        <figure className="w-9 h-9 rounded-sm bg-green dark:bg-green-dark z-10" />
      </Timeline.Indicator>
      <Card>
        <CardHeader>
          <p className="font-bold">Square indicator</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </Timeline.Item>,
    <Timeline.Item key="content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </Timeline.Item>,
  ],
};
