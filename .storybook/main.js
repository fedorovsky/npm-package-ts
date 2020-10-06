const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [{
    name: '@storybook/addon-storysource',
    options: {
      rule: {
        test: [/\.stories\.tsx?$/],
        include: [path.resolve(__dirname, '../src')],
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: true },
      },
    },
  }],
  typescript: {
    check: true,
    checkOptions: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [/node_modules/],
      loaders: ['eslint-loader'],
    });
    return config;
  },
}
