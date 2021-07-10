module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './.storybook/preview.js' // stops the bg-dark class from being purged in storybook
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // These are the H1 colours
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Greyscale
      dark: {
        DEFAULT: "#151515",
      },
      black: {
        DEFAULT: "#0a0a0a",
      },
      charcoal: {
        DEFAULT: "#3e3e3e"
      },
      graphite: {
        DEFAULT: "#717171"
      },
      stone: {
        DEFAULT: "#9e9e9e"
      },
      slate: {
        DEFAULT: "#c5c5c5"
      },
      smoke: {
        DEFAULT: "#e9e9e9"
      },
      steam: {
        DEFAULT: "#f7f8f9"
      },
      white: {
        DEFAULT: "#ffffff"
      },
      // Colours!
      pink: {
        lighter: "#f191be",
        light: "#e94f97",
        DEFAULT: "#e10e71",
        dark: "#a40b53",
        darker: "#52062a"
      },
      blue: {
        lighter: "#9fbafa",
        light: "#6691f7",
        DEFAULT: "#2d68f4",
        dark: "#214cb2",
        darker: "#112659"
      },
      red: {
        lighter: "#f09da3",
        light: "#e7636c",
        DEFAULT: "#df2935",
        dark: "#a31e27",
        darker: "#520f14"
      }
    
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
