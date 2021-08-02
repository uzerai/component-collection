import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import 'tailwindcss/tailwind.css';
import '../styles/main.css';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'Light',
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

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)