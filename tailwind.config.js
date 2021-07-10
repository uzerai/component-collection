module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: {
        light: "#e94f97",
        DEFAULT: "#e10e71",
        dark: "#a40b53"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
