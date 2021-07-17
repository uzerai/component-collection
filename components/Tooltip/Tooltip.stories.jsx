import React from 'react';
import { Tooltip } from './Tooltip';


export default {
  title: 'Interactive/Tooltip',
  component: Tooltip,
};

const Template = (args) => <div className="dark:text-white">
  <div>Some text: <Tooltip {...args}>tooltip text</Tooltip> other text </div>
  <div>More text to take up some space underneath the text above this text</div>
  <div>Even more text haha, but don&#39;t be fooled </div>
  <div>The text never ends </div>
</div>;

const LargeTextTemplate = (args) => <div className="text-2xl dark:text-white">
    <div>Some text: <Tooltip {...args}>tooltip text</Tooltip> other text </div>
    <div>More text to take up some space underneath the text above this text</div>
    <div>Even more text haha, but don&#39;t be fooled </div>
    <div>The text never ends </div>
</div>;

export const Default = Template.bind({});
Default.args = {
  variation: 'default',
  children: [
    "tooltip text"
  ],
  tooltip: [
    <p key="tooltip">More explanation here</p>
  ]
};

export const LongDefault = Template.bind({});
LongDefault.args = {
  variation: 'default',
  children: [
    "tooltip text"
  ],
  tooltip: [
    <p key="tooltip">More explanation here</p>
  ],
};

export const LargeText = LargeTextTemplate.bind({});
LargeText.args = {
  variation: 'default',
  children: [
    "tooltip text"
  ],
  tooltip: [
    <p key="tooltip">More explanation here</p>
  ]
};

export const LargeTextLong = LargeTextTemplate.bind({});
LargeTextLong.args = {
  variation: 'default',
  children: [
    "tooltip text"
  ],
  tooltip: [
    <p key="tooltip">More explanation here</p>
  ],
  styles: 'w-64'
};
