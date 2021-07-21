import React from 'react';
import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';


export default {
  title: 'Interactive/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'full',
  children: [
    <Button label='Left button' variation={'blue'} key={'left-button'}/>,
    <Button label='Middle button' variation={'blue'} key={'middle-button'}/>,
    <Button label='Right button' variation={'blue'} key={'right-button'}/>
  ],
};

export const Separated = Template.bind({});
Separated.args = {
  size: 'full',
  variation: 'separated',
  justify: 'around',
  children: [
    <Button label='Left button' variation={'blue'} key={'left-button'}/>,
    <Button label='Middle button' variation={'blue'} key={'middle-button'}/>,
    <Button label='Right button' variation={'blue'} key={'right-button'}/>
  ],
};
