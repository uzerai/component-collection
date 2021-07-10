import React from 'react';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import BackArrow from './assets/navigation-back-arrow.svg';
import ForwArrow from './assets/navigation-forward-arrow.svg';

export default {
  title: 'Interactive/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'full',
  children: [
    <Button label="Left button" />,
    <Button label='Middle button'/>,
    <Button label="Right button" />
  ],
};

export const Separated = Template.bind({});
Separated.args = {
  size: 'full',
  variation: 'separated',
  justify: 'around',
  children: [
    <Button label="Left button" />,
    <Button label='Middle button'/>,
    <Button label="Right button" />
  ],
};

export const Pagination = Template.bind({});
Pagination.args = {
  size: 'full',
  children: [
    <Button>
      <div class="flex flex-row items-center text-center">
        <BackArrow class="w-6 fill-current" />
        <div class="flex-grow">Back</div>
      </div>
    </Button>,
    <Button label='1'></Button>,
    <Button label='2'></Button>,
    <Button label='3'></Button>,
    <Button label='4'></Button>,
    <Button label='... 41'></Button>,
    <Button>
      <div class="flex flex-row items-center text-center">
        <div class="flex-grow">Next</div>
        <ForwArrow class="w-6 fill-current" />
      </div>
    </Button>
  ],
};
