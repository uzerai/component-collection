import React from 'react';
import { ColorIndicator, VARIATIONS } from './ColorIndicator';


export default {
  title: 'Indicators/ColorIndicator',
  component: ColorIndicator,
};

const Template = (args) => <div className="flex flex-col gap-5">
  {
    Object.keys(VARIATIONS).map((variation) => 
      <div key={variation} className="flex gap-2 items-center">
        <ColorIndicator size={args.size} variation={variation}/>
        <span className='text-sm font-varta inline dark:text-white'> A {variation} indicator</span>
      </div>
    )
  }
</div>;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  variation: 'default',
};