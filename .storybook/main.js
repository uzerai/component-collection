module.exports = {
  stories: [
    "../shared/index.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    'storybook-addon-themes',
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    { 
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    
  ],
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  }
}
