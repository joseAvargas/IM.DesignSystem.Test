const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    "@storybook/addon-measure",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: 'src/styles.scss',
        }
      }
    }
  ],
  "core": {
    "builder": "webpack5"
  },
  
}
