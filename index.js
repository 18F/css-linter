var fs = require('fs');

var postcss = require('postcss');
var syntax = require('postcss-scss');

var plugins = require('./src/plugins');

var sourceCss = fs.readFileSync('test/ugly.scss');
var processOpts = {
  syntax: syntax
};

postcss(plugins)
  .process(sourceCss, processOpts)
  .then(function (result) {
    result.messages.forEach(function(i) {
      console.log('i', i);
    });
  });
