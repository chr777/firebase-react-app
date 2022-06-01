// const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    babel: {
      plugins: [
        [
          'styled-components',
          {
            minify: false,
            pure: true,
            transpileTemplateLiterals: false,
            namespace: 'viciniti',
          },
        ],
      ],
    },
    webpack: {
      alias: {},
      plugins: {
        add: [new webpack.DefinePlugin(envKeys)],
        remove: [],
      },
      configure: (webpackConfig) => webpackConfig,
    },
  };
};
