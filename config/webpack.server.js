const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common');

const config = webpackMerge(commonConfig, {
  target: 'node',
  entry: './src/platform/node.ts', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: helpers.root('dist'),
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  externals: helpers.checkNodeImport,
  plugins: [],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
});

module.exports = config;
