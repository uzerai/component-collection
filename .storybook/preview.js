import 'tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
        color: '#ffffff',
        default: true
      },
      {
          name: 'Dark',
          // The class dark will be added to the body tag
          class: ['dark', 'bg-dark'],
          color: '#0a0a0a'
      }
    ]
  }
}