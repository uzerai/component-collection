import React from 'react';
import { Tooltip } from './Tooltip';


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
              return <div className={textClass} key={textClass}>This is normal text and this is the <Tooltip {...args} />. Hope it helps!</div>
            })
          }
        </div>
      }
      )
    }
  </div>;
};

export const Default = Template.bind({});
Default.args = {
  variation: 'default',
  children: [
    'tooltip'
  ],
  tooltip: [
    <p key="tooltip">More explanation here</p>
  ]
};

export const Large = Template.bind({});
Large.args = {
  variation: 'default',
  size: 'large',
  children: [
    'tooltip'
  ],
  tooltip: [
    <p key="tooltip">
      A larger tooltip should warrant a larger tooltip text,
      and that text should go into possibly more
      details on exactly what the tooltip should be besides.
    </p>
  ]
};
