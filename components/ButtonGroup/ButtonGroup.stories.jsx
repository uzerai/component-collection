import React from 'react';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

export default {
  title: 'Interactive/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'full',
  justify: 'around',
  buttons: [
    <Button size='default' label='Left button'></Button>,
    <Button size='default' label='Middle button'></Button>,
    <Button size='default' label='Right button'></Button>
  ],
};
