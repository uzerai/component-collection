import React from 'react';
import { Tooltip } from '.';


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

const IsolatedTemplate = (args) => {
  return <div className='w-full h-screen flex justify-center items-center dark:text-white'>
    <Tooltip {...args}>Click Me!</Tooltip>
  </div>
};

export const Default = Template.bind({});
Default.args = {
  tooltip: 'Here\'s a tooltip for ya!',
  variation: 'default',
};

export const Isolated = IsolatedTemplate.bind({});
Isolated.args = {
  visible: true,
  trigger: 'click',
  tooltip: 'Here\'s a tooltip for ya!',
  variation: 'default',
}

export const Large = Template.bind({});
Large.args = {
  tooltip: 'A BIG TOOLTIP?',
  variation: 'default',
  size: 'large'
};
