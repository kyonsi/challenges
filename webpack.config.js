const path = require('path');

var isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
var sourcePath = path.join(__dirname, './src');
var contentBase = path.join(__dirname, './public');

const config = {
  context: sourcePath,
  entry: './index.tsx',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
},
  output: {
    filename: '[name].js',
    path: contentBase,
    publicPath: 'public',
  },
  mode: "development",
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: contentBase,
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
            options: { plugins: ['react-hot-loader/babel'] }
          },
          'ts-loader'
        ].filter(Boolean)
      }
    ],
  },
};

module.exports = config;
