import React from 'react';
import { Tooltip } from '.';
import { Card, CardContent } from '../Card';
import { Separator } from '../Separator';
import { Timeline, TimelineHead, TimelineItem, TimelineTail } from '../Timeline';

export default {
  title: 'Interactive/Tooltip',
  component: Tooltip,
};

const Template = (args) => {
  return <div className="dark:text-white flex flex-col gap-10 items-center">
    {
      [
        'Varta',
        'Effra',
        ''
      ].map((font) => {
        return <div className={'flex flex-col gap-2'} key={font}>
          <p className="text-3xl">{font === '' ? 'Default': null } Font: {font}</p>
          <hr />
          {
            [
              'text-xs',
              'text-sm',
              'text-base',
              'text-lg',
              'text-xl',
              'text-2xl',
              'text-3xl',
              'text-4xl',
              'text-5xl',
              'text-6xl',
            ].map((textClass) => {
              return <div className={textClass} key={textClass}>This is normal text and this is the <Tooltip {...args}>tooltip</Tooltip>. Hope it helps!</div>
            })
          }
        </div>
      }
      )
    }
  </div>;
};

const CenteredTemplate = (args) => {
  return <div className='w-full h-screen flex justify-center items-center dark:text-white'>
    <Tooltip {...args}>
      {args.component}
    </Tooltip>
  </div>
};

const LargeTooltip = () => <div className='flex flex-col'>
  <p className='text-xl font-varta px-4 pt-4'>A HUGE tooltip</p>
  {
    /*
     * Separators currently do not handle padding correctly,
     * so if required to entirely separate the parent container,
     * do not apply padding to the parent.
     */
  }
  <Separator label='with separator' />
  <div className='p-8'>
    <Timeline>
      <TimelineHead key="timeline-header">
        <Card>
          <CardContent>
            <p className="font-thin">This is the TimelineHead</p>
          </CardContent>
        </Card>
      </TimelineHead>
      <TimelineTail key="timeline-tail">
        <Card>
          <CardContent>
            <p className="font-thin">This is the TimelineTail</p>
          </CardContent>
        </Card>
      </TimelineTail>
      <TimelineItem key="custom-content">
        <Card>
          <CardContent>
            <p className="font-thin">This is the TimelineContent</p>
          </CardContent>
        </Card>
      </TimelineItem>
    </Timeline>
  </div>
</div>

export const Default = Template.bind({});
Default.args = {
  tooltip: 'Here\'s a tooltip for ya!',
  variation: 'default',
};

export const CenteredCustom = CenteredTemplate.bind({});
CenteredCustom.args = {
  variation: 'custom',
  visible: true,
  interactive: true,
  placement: 'bottom',
  trigger: 'click',
  tooltip: <LargeTooltip />,
  component: <p className='text-xl'>Click me!</p>
}