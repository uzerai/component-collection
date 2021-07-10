import React from 'react';

import { Card } from './Card';

export default {
  title: 'Layout/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Card.Header>
      <>Something</>
    </Card.Header>,
    <Card.Footer>
      <>Footer</>
    </Card.Footer>,
    <Card.Content styles="h-52 flex items-center justify-center">
      <h1 className="text-2xl">CONTENT</h1>
    </Card.Content>
  ],
};

export const Gray = Template.bind({});
Gray.args = {
  size: 'default',
  variation: 'gray',
  children: [
    <Card.Content variation={'gray'} styles="h-52 flex items-center justify-center">
      <h1 className="text-2xl">CONTENT</h1>
    </Card.Content>
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  size: 'default',
  variation: 'default',
  children: [
    <Card.Content>
      <Card variation={'nested'}>
        <Card.Content styles={"px-6 h-52"} variation={'nested'}>Some Content</Card.Content>
      </Card>
    </Card.Content>
    
  ],
};
