var _ = require('../src/lowerdash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js');
	
describe('Lowerdash array', function(){
	describe('#from()', function(){
		it('Should be an array when passed arg is "1"', function(){
			assert.equal(true, _.isArray(_.from(1)));
		});
		
		it('First entry should return "1"', function(){
			assert.equal(1, _.from(1)[0]);
			assert.equal(1, _.from([1])[0]);
		});
		
		it('should equal "[1]" when passed argument is "1"', function(){
			assert.equal(true, _.isEqual(_.from(1), [1]));
			assert.equal(true, _.isEqual(_.from([1]), [1]));
		});
	});
	
	
	describe('#penultimate()', function(){
		it('Penultimate of [1, 2, 3, 4] should be "3"', function(){
			assert.equal(3, _.penultimate([1, 2, 3, 4]));
		});
	});
	
	
	describe('#glutten()', function(){
	});
	
	
	describe('#isLaxEqual(Array a, Array b)', function(){
		it('[1, 2, 3] should equal [2, 1, 3]', function(){
			assert.equal(true, _.isLaxEqual([1, 2, 3], [2, 1, 3]));
		});
	});
});