
var chai = require('chai');
var postcss = require('postcss');
var syntax = require('postcss-scss');

var rules = require('../src/format');

var expect = chai.expect;

describe('ensureSpaceInRuleName', function() {
  var processOpts = {
    syntax: syntax
  };

  it('should ouput a message if there\'s no space', function(done) {
    var testCSS = '.sel { color:blue; };';

    postcss([rules.ensureSpaceInRuleName])
      .process(testCSS, processOpts)
      .then(function (result) {
        expect(result.messages.length).to.be.above(0);
        done();
      });
  });

  it('should output a message if there\'s more then once space', function(done) {
    var testCSS = '.sel { color:  blue; };';

    postcss([rules.ensureSpaceInRuleName])
      .process(testCSS, processOpts)
      .then(function (result) {
        expect(result.messages.length).to.be.above(0);
        done();
      });
  });

  it('should not output messages if there\'s no space', function(done) {
    var testCSS = '.sel { color: blue; };';

    postcss([rules.ensureSpaceInRuleName])
      .process(testCSS, processOpts)
      .then(function (result) {
        expect(result.messages.length).to.equal(0);
        done();
      });

  });
});
