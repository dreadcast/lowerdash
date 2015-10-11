var _ = require('../src/array'),
	assert = require('assert'),
	myTestObject = require('./testobject.js'),
	fibonacci = require('./fibonacci');

describe('Lowerdash array', function(){
	describe('#from()', function(){
		describe('Should be an array', function(){
			it('Should be an array when passed arg is "1"', function(){
				assert.equal(true, _.isArray(_.from(1)));
			});
			it('Should be an array when passed arg is "[1]"', function(){
				assert.equal(true, _.isArray(_.from([1])));
			});
		});

		describe('Should return "1"', function(){
			it('First entry should return "1" when passed arg is "1"', function(){
				assert.equal(1, _.from(1)[0]);
			});
			it('First entry should return "1" when passed arg is "[1]"', function(){
				assert.equal(1, _.from([1])[0]);
				assert.equal(1, _.chain([1]).from().last().value());
			});
		});

		describe('Should equal "[1]"', function(){
			it('should equal "[1]" when passed argument is "1"', function(){
				assert.equal(true, _.isEqual(_.from(1), [1]));
			});
			it('should equal "[1]" when passed argument is "[1]"', function(){
				assert.equal(true, _.isEqual(_.from([1]), [1]));
			});
		});
	});


	describe('#penultimate()', function(){
		it('Penultimate of [1, 2, 3, 4] should be "3"', function(){
			assert.equal(3, _.penultimate([1, 2, 3, 4]));
		});
	});


	describe('#gluten()', function(){
		it('Make Fibonacci eat gluten', function(){
 			assert.equal('1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817 and 39088169', _.gluten(fibonacci, ', ', ' and '));
		});
		it('Gluten [1, 2, 3] with ", " and " then " should return "1, 2 then 3"', function(){
 			assert.equal('1, 2 then 3', _.gluten([1, 2, 3], ', ', ' then '));
		});
		it('Gluten [1, 2] with ", " and " then " should return "1 then 2"', function(){
 			assert.equal('1 then 2', _.gluten([1, 2], ', ', ' then '));
		});
		it('Gluten [1] with ", " and " then " should return "1"', function(){
 			assert.equal('1', _.gluten([1], ', ', ' then '));
		});
	});


	describe('#isLaxEqual(Array a, Array b)', function(){
		it('[1, 2, 3] should equal [2, 1, 3]', function(){
			assert.equal(true, _.isLaxEqual([1, 2, 3], [2, 1, 3]));
		});
		it('[1, 2, 3, 4] should not equal [2, 1, 3]', function(){
			assert.equal(false, _.isLaxEqual([1, 2, 3, 4], [2, 1, 3]));
		});
		it('[1, 2, 3, 2] should equal [1, 1, 2, 1, 3]', function(){
			assert.equal(true, _.isLaxEqual([1, 2, 3, 2], [1, 1, 2, 1, 3]));
		});
		it('[1, 2, 3, 2, 5] should not equal [1, 1, 2, 1, 3]', function(){
			assert.equal(false, _.isLaxEqual([1, 2, 3, 2, 5], [1, 1, 2, 1, 3]));
		});
	});
});
