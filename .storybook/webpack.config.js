const path = require("path");

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, "../src"),
    ...config.resolve.modules
  ];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
