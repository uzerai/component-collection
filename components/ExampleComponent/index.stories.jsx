import React from 'react';
import { ExampleComponent } from '.';


export default {
  title: 'Example/Template',
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;
const CenteredTemplate = (args) => <div className='absolute inset-0 flex justify-center items-center dark:text-white'>
  <ExampleComponent {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [],
};

export const Centered = CenteredTemplate.bind({});
Centered.args = {
  size: 'default',
  variation: 'default',
  children: [],
};