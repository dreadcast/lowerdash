var _ = require('../src/lowerdash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js');

describe('Lowerdash object', function(){
	describe('#keyOf()', function(){
		it('Key of value "1" should be "a"', function(){
			assert.equal('a', _.keyOf(myTestObject, 1));
		});
	});
});