let printToMessage = require('./utils.js');
let toUpper = require('./exo.js');
let assert  = require('assert');

it('should return HELLO', function() {
	assert.equal('HELLO', toUpper('hello'));
});

it('should return WORLD', function() {
	assert.equal('WORLD', toUpper('world'));
});