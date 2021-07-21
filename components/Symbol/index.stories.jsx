import React from 'react';
import { SIZES, Symbol, SYMBOLS, VARIATIONS } from '.';


export default {
  title: 'Indication/Symbol',
  component: Symbol,
};

const Template = (args) => <>
  <p className='text-2xl my-3 dark:text-white'>Symbols:</p>
  <hr className='dark:border-white' />
  {/* Spits out a grid of all combinations of VARIATIONS/SIZES */}
  <div className='my-12 grid grid-cols-5 gap-x-4 gap-y-12'>
    {
      Object.keys(SYMBOLS).map(symbol => 
        Object.keys(SIZES)
          .map(size => 
            Object.keys(VARIATIONS).map(
              variation => <div className={'col-span-1 flex flex-col items-center gap-2'} key={variation}>
                <div className={'flex-shrink'}>
                  <Symbol 
                    {...args}
                    size={size} 
                    variation={variation}
                    symbol={symbol}
                  />
                </div>
                <p className='text-xl capitalize dark:text-white'>{symbol}</p>
                <p className='capitalize text-xs text-charcoal dark:text-smoke'>{variation}/{size}</p>
              </div>
            )
          )
      )
    }
  </div>
</>;

export const All = Template.bind({});
All.args = {
  size: 'default',
  variation: 'default',
  symbol: 'default',
  children: [],
};