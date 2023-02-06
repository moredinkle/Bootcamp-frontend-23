const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    clean: true
  }
};
