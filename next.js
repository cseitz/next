#!/usr/bin/env node
const { resolve, extname } = require('path');
const __next = resolve(process.cwd(), 'node_modules', 'next/dist');

require('./overwrite');

module.exports = require(resolve(__next, 'bin/next'));