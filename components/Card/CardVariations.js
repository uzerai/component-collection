const COMMON = {
  header: [
    'w-full',
    'px-6',
    'py-4',
  ],
  content: [
    'px-6',
    'py-4',
  ],
  footer: [
    'w-full',
    'px-6',
    'py-2',
  ],
  container: [
    'w-full',
    'rounded',
    'overflow-hidden',
    'shadow',
  ]
}

export const VARIATIONS = {
  default: {
    header: [
      ...COMMON.header,
      'dark:border-b',
      'dark:border-charcoal',
    ],
    content: [
      ...COMMON.content,
      'bg-white',
      'dark:bg-dark-1'
    ],
    footer: [
      ...COMMON.footer,
      'dark:border-t',
      'dark:border-charcoal',
    ],
    container: [
      ...COMMON.container,
      'bg-steam',
      'dark:bg-dark-2',
      'dark:text-steam',
      'dark:border-charcoal',
      'dark:border'
    ]
  },
  gray: {
    content: [
      ...COMMON.content,
      'dark:bg-dark-2',
    ],
    container: [
      ...COMMON.container,
      'bg-steam',
      'dark:bg-dark-3',
      'dark:border-charcoal',
      'dark:border',
    ]
  },
  nested: {
    container: [
      'w-full',
      'rounded-md',
      'border',
      'border-smoke',
      'dark:border-charcoal'
    ],
  },
  none: {},
};

export const SIZES = {
  default: [],
};