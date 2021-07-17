import React from 'react';
import { Button } from '../Button/Button';
import BackArrow from './assets/navigation-back-arrow.svg';
import ForwArrow from './assets/navigation-forward-arrow.svg';
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
    <Button label="Left button" key={'left-button'}/>,
    <Button label='Middle button'key={'middle-button'}/>,
    <Button label="Right button" key={'right-button'}/>
  ],
};

export const Separated = Template.bind({});
Separated.args = {
  size: 'full',
  variation: 'separated',
  justify: 'around',
  children: [
    <Button label="Left button" key={'left-button'}/>,
    <Button label='Middle button'key={'middle-button'}/>,
    <Button label="Right button" key={'right-button'}/>
  ],
};

export const Pagination = Template.bind({});
Pagination.args = {
  size: 'full',
  children: [
    <Button key={'back'}>
      <div className="flex flex-row items-center text-center">
        <BackArrow class="w-6 fill-current" />
        <div className="flex-grow">Back</div>
      </div>
    </Button>,
    <Button label='1' key={1}></Button>,
    <Button label='2' key={2}></Button>,
    <Button label='3' key={3}></Button>,
    <Button label='4' key={4}></Button>,
    <Button key={'next'}>
      <div className="flex flex-row items-center text-center">
        <div className="flex-grow">Next</div>
        <ForwArrow class="w-6 fill-current" />
      </div>
    </Button>
  ],
};
