import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../Card/Card';
import { SkeletonTextLoader } from '../SkeletonLoader/SkeletonTextLoader';
import { Timeline, TimelineHead, TimelineIndicator, TimelineItem, TimelineTail } from './Timeline';

export default {
  title: 'Layout/Timeline',
  component: Timeline,
};

const Template = (args) => <Timeline {...args} />;

// Declaring prop-types for supplementary, one-off, storybook-only elements is silly.
// eslint-disable-next-line
const DefaultContent = ({ children }) => <p 
  className="p-10 border border-smoke dark:border-dark-3 rounded bg-white dark:bg-dark-1 dark:text-white">
  {children ? children : 'Default content where anything can be written.'}
</p>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <TimelineHead key="timeline-header">
      <Card>
        <CardContent>
          <p className="font-thin">This is the TimelineHead</p>
        </CardContent>
      </Card>
    </TimelineHead>,
    <TimelineTail key="timeline-tail">
      <Card>
        <CardContent>
          <p className="font-thin">This is the TimelineTail</p>
        </CardContent>
      </Card>
    </TimelineTail>,
    <TimelineItem key="custom-content">
      <DefaultContent />
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='noIndicator'>
      <DefaultContent />
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='smallIndicator' size='smallIndicator'>
      <DefaultContent />
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='interwoven' size='interwoven'>
      <DefaultContent />
    </TimelineItem>,
  ],
};

export const NoIndicator = Template.bind({});
NoIndicator.args = {
  size: 'default',
  variation: 'default',
  children: [
    <TimelineItem key="custom-content">
      <TimelineIndicator><></></TimelineIndicator>
      <DefaultContent />
    </TimelineItem>,
  ],
};

export const Interwoven = Template.bind({});
Interwoven.args = {
  size: 'default',
  variation: 'default',
  children: [
    <TimelineHead key="timeline-header">
      <DefaultContent>This is the timeline-head</DefaultContent>
    </TimelineHead>,
    <TimelineTail key="timeline-tail">
      <DefaultContent>This is the timeline-tail</DefaultContent>
    </TimelineTail>,
    <TimelineItem key="custom-content" variation='interwoven' size='interwoven'>
      <DefaultContent />
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='interwoven' size='gapStart'>
      <DefaultContent>
        This TimelineItem will have a gap after it (<strong>interwoven / gapStart</strong>).
      </DefaultContent>
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='interwoven' size='gapEnd'>
      <DefaultContent>
        This TimelineItem will resume the timeline after a gap (<strong>interwoven / gapEnd</strong>).
      </DefaultContent>
    </TimelineItem>,
    <TimelineItem key="custom-content" variation='interwoven' size='interwoven'>
      <DefaultContent />
    </TimelineItem>,
  ],
};

export const CardsTimeline = Template.bind({});
CardsTimeline.args = {
  size: 'default',
  variation: 'default',
  children: [
    <TimelineHead key="timeline-header">
      <Card>
        <CardHeader>
          <p className="font-bold">TimelineHead</p>
        </CardHeader>
        <CardContent>
          <p className="font-thin">This is the TimelineHead</p>
        </CardContent>
      </Card>
    </TimelineHead>,
    <TimelineTail key="timeline-tail">
      <Card>
        <CardFooter>
          <p className="font-bold">Timeline Tail</p>
        </CardFooter>
        <CardContent>
          <p className="font-thin">This is the TimelineTail</p>
        </CardContent>
      </Card>
    </TimelineTail>,
    <TimelineItem key="header-content">
      <Card>
        <CardHeader>
          <p className="font-bold">Header and Content</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem key="content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem key="gray">
      <Card>
        <CardContent variation="gray">
          <SkeletonTextLoader nLines={5} styles="bg-slate dark:bg-dark-3" />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem key="footer-content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
        <CardFooter>
          <p className="font-bold text-sm">Footer and Content</p>
        </CardFooter>
      </Card>
    </TimelineItem>,
  ],
};

export const CustomIndicator = Template.bind({});
CustomIndicator.args = {
  size: 'default',
  variation: 'default',
  children: [
    <TimelineItem key="content">
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem variation={'smallIndicator'} size='smallIndicator' key={'small-indicator'}>
      <Card>
        <CardHeader>
          <p className="font-bold">Small indicator</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem key={'custom-provided-indicator'}>
      <TimelineIndicator>
        <figure className="w-9 h-9 rounded-sm bg-green dark:bg-green-dark z-10" />
      </TimelineIndicator>
      <Card>
        <CardHeader>
          <p className="font-bold">Square indicator</p>
        </CardHeader>
        <CardContent>
          <SkeletonTextLoader nLines={3} />
        </CardContent>
      </Card>
    </TimelineItem>,
    <TimelineItem key="content" >
      <Card>
        <CardContent>
          <SkeletonTextLoader nLines={5} />
        </CardContent>
      </Card>
    </TimelineItem>,
  ],
};
