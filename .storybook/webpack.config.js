const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, '../src'),
    ...config.resolve.modules,
  ];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
