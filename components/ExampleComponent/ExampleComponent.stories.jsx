import React from 'react';
import { ExampleComponent } from './ExampleComponent';


export default {
  title: 'Example/Template',
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [],
};