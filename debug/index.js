const DEMO_INDEX = '01'

const webpack = require(`../packages/demo-${DEMO_INDEX}/node_modules/webpack`);
const config = require(`../packages/demo-${DEMO_INDEX}/webpack.config`);

const compiler = webpack(config);
compiler.run();
