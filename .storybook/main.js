module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "storybook-addon-themes",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-postcss",
    "storybook-addon-themes"
  ]
}