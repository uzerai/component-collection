import React from 'react';
import { Alert } from '.';


export default {
  title: 'Indication/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center'>
  <Alert {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <p key='message'>Some warning message here</p>
  ],
};

export const Success = Template.bind({});
Success.args = {
  size: 'default',
  variation: 'success',
  children: [
    <p key='message'>Some warning message here</p>
  ],
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'default',
  variation: 'danger',
  children: [
    <p key='message'>Some warning message here</p>
  ],
};

export const Info = Template.bind({});
Info.args = {
  size: 'default',
  variation: 'info',
  children: [
    <p key='message'>Some warning message here</p>
  ],
};

export const Multiline = Template.bind({});
Multiline.args = {
  size: 'default',
  variation: 'default',
  children: [
    <p key='message'>Some message which spans across multiple</p>,
    <p key='message-2'>lines, but really shouldn't make it look weird.</p>
  ],
};

export const Centered = CenteredTemplate.bind({});
Centered.args = {
  size: 'default',
  variation: 'default',
  children: [
    <p key='message'>Some warning message here</p>
  ],
};