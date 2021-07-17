export const VARIATIONS = {
  default: {
    container: [
      "flex",
      "relative",
      "group"
    ],
    item: [
      "flex-grow"
    ],
    itemLeft: [
      "flex",
      "justify-center"
    ],
    itemIndicator: [
      'rounded-full',
      'bg-pink',
      'z-10',
    ],
    timelineLine: [
      'h-full',
      'bg-slate',
      'dark:bg-white',
      'absolute',
      'z-0'
    ],
    timelineContainer: [
      'z-10',
    ],
  },
  noIndicator: {
    itemIndicator: [
      'hidden'
    ],
  },
  interwoven: {
    itemIndicator: [
      'hidden'
    ],
    itemLeft: [
      'absolute',
      'z-0',
      'flex',
      'justify-center',
    ],
    item: [
      'flex-grow',
      'bg-inherit',
      'z-10'
    ]
  },
  smallIndicator: {
    itemIndicator: [
      "rounded-full",
      "bg-slate",
      "dark:bg-white",
      "z-10"
    ]
  },
  noLink: {},
  noContinue: {},
  noGap: {},
};

export const SIZES = {
  default: {
    container: [
      "gap-5"
    ],
    item: [
      "pb-5", 
      "group-last:pb-5",
      "group-first:pt-5"
    ],
    itemIndicator: [
      'h-10',
      'w-10',
    ],
    itemLeft: [
      "w-10"
    ],
    timelineLine: [
      'w-0.5'
    ],
    timelineContainer: [
      "mt-2",
      "group-first:pt-5"
    ]
  },
  interwoven: {
    itemLeft: [
      'h-full',
      'w-10'
    ]
  },
  noIndicator: {},
  smallIndicator: {
    itemIndicator: [
      'h-5',
      'w-5',
    ]
  }  
};