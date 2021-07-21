import React from 'react';
import { SIZES, Tag, VARIATIONS } from './Tag';


export default {
  title: 'Indication/Tag',
  component: Tag,
};

const Template = (args) => <>
  <p className='text-2xl my-3 dark:text-white'>Tags:</p>
  <hr className='dark:border-white' />
  {/* Spits out a grid of all combinations of VARIATIONS/SIZES */}
  <div className='my-5 grid grid-cols-5 gap-4'>
    {
      Object.keys(SIZES)
        .map(size => 
          Object.keys(VARIATIONS).map(
            variation => <div className={'col-span-1 flex justify-center'} key={variation}>
              <div className={'flex-shrink'}>
                <Tag 
                  {...args}
                  size={size} 
                  variation={variation} 
                />
              </div>
            </div>
          ))
    }
  </div>
</>

export const Default = Template.bind({});
Default.args = {
  tagName: 'Resolved',
};

export const Closeable = Template.bind({});
Closeable.args = {
  tagName: 'Close me',
  closeable: true,
}

export const Counter = Template.bind({});
Counter.args = {
  tagName: 'Count me',
  count: 11
}