const path = require('path');

module.exports = {
  mode: 'none',
  entry: './lib/demo-01.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};