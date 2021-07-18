// Classes shared by all buttons
const COMMON = [
  'transition',
  'duration-700',
  'focus:shadow',
  'rounded',
  'dark:text-white',
]

// List of all button variations that we want developers to use
export const VARIATIONS = {
  primary: [
    ...COMMON,
    'text-white',
    'font-semibold',
    'bg-pink',
    'hover:bg-pink-dark',
  ],
  secondary: [
    ...COMMON,
    'text-pink',
    'font-semibold',
    'border',
    'border-pink',
    'hover:border-pink-dark',

  ],
  tertiary: [
    ...COMMON,
    'text-pink',
    'font-medium',
    'hover:underline',
    'hover:text-pink-dark',
    'rounded',
    'focus:!shadow-none'
  ],
  blue: [
    ...COMMON,
    'text-white',
    'font-semibold',
    'bg-blue',
    'hover:bg-blue-dark',
  ],
  danger: [
    ...COMMON,
    'text-white',
    'bg-red',
    'hover:bg-red-dark',
    'font-semibold',
  ]
};

// List of all sizes that we want developers to use.
export const SIZES = {
  default: [
    'py-2',
    'px-5',
  ],
  full: [
    'w-full',
    'py-2',
    'px-5'
  ],
  half: [
    'w-1/2',
    'py-2',
    'px-5'
  ],
  none: [],
  large: [
    '!py-4',
    '!px-6'
  ]
};