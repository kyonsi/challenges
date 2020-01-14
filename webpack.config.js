const path = require('path');
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const contentBase = path.join(__dirname, './public');

const config = {
  context: sourcePath,
  entry: './index.tsx',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    filename: '[name].js',
    path: contentBase,
    publicPath: 'public'
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
            loader: 'babel-loader'
          },
          'ts-loader'
        ].filter(Boolean)
      }
    ]
  }
};

module.exports = config;
