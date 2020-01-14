const path = require('path');
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const contentBase = path.join(__dirname, './public');

const config = {
  context: sourcePath,
  entry: './index.tsx',
  output: {
    filename: './build/main.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      "~": path.resolve(__dirname, 'src/')
    }
  },
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          !isProduction && {
            loader: 'babel-loader',
            options: {
              babelrc: true
            }
          },
        ].filter(Boolean)
      }
    ]
  }
};

module.exports = config;
