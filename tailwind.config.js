module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './.storybook/preview.js' // stops the bg-dark class from being purged in storybook
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      effra: ['Effra'],
      varta: ['Varta']
    },
    // These are the H1 colours
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Greyscale
      dark: {
        DEFAULT: '#151515',
        '1': '#191919',
        '2': '#1f1f1f',
        '3': '#3e3e3e'
      },
      black: {
        DEFAULT: '#0a0a0a',
      },
      charcoal: {
        DEFAULT: '#3e3e3e'
      },
      graphite: {
        DEFAULT: '#717171'
      },
      stone: {
        DEFAULT: '#9e9e9e'
      },
      slate: {
        DEFAULT: '#c5c5c5'
      },
      smoke: {
        DEFAULT: '#e9e9e9'
      },
      steam: {
        DEFAULT: '#f7f8f9'
      },
      white: {
        DEFAULT: '#ffffff'
      },
      // Colours!
      pink: {
        salmon: '#fff6fa',
        lighter: '#f191be',
        light: '#e94f97',
        DEFAULT: '#e10e71',
        dark: '#a40b53',
        darker: '#52062a'
      },
      blue: {
        lighter: '#9fbafa',
        light: '#6691f7',
        DEFAULT: '#2d68f4',
        dark: '#214cb2',
        darker: '#112659'
      },
      red: {
        lighter: '#f09da3',
        light: '#e7636c',
        DEFAULT: '#df2935',
        dark: '#a31e27',
        darker: '#520f14'
      },
      yellow: {
        lighter: '#f9dca2',
        light: '#f6c76b',
        DEFAULT: '#f3b234',
        dark: '#b18226',
        darker: '#594113'
      },
      orange: {
        lighter: '#ffbd9a',
        light: '#ff965e',
        DEFAULT: '#ff6f22',
        dark: '#ba5119',
        darker: '#5d290d'
      },
      green: {
        lighter: '#8fdac1',
        light: '#4cc49c',
        DEFAULT: '#09a571',
        dark: '#077f57',
        darker: '#5d290d'
      }
    },
    extend: {
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'checked'],
      borderColor: ['dark', 'disabled', 'checked'],
      borderWidth: ['dark', 'disabled'],
      display: ['checked', 'responsive'],
      margin: ['first'],
      padding: ['first']
    },
  },
  plugins: [
    require('tailwindcss-group-variants'),
  ],
  groupVariants: {
    'group-first': ['group', 'first', ':first-child'],
    'group-last': ['group', 'last', ':last-child'],
  }
}
