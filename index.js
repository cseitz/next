const { resolve, extname } = require('path');
const __next = resolve(process.cwd(), 'node_modules', 'next/dist');
const __lib = resolve(__next, 'lib');

require('./overwrite');

module.exports = require(resolve(__next, 'server/next.js'));