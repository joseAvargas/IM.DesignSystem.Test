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
  resolve: {
    alias: {
        'node_modules': path.join(__dirname, './node_modules'),
        '@ng-bootstrap/ng-bootstrap': path.join(__dirname, './node_modules/@ng-bootstrap/ng-bootstrap')
    }
  },
  module: {
    rules: [
        {
            test: /\.(?:js|ts|d.ts)$/,
            type: "node_modules/@ng-bootstrap/ng-bootstrap"
        }
    ]
}
}
