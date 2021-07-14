const path = require('path');

module.exports = {
  mode: 'none',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
