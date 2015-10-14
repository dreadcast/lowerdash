require('babel/register')({
    stage: 0
});

var _ = require('../lodash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js');

describe('Lowerdash deep', function(){
	describe('#getFromPath(Object obj, String path)', function(){
		it('d Should return 4', function(){
			assert.equal(4, _.getFromPath(myTestObject, 'd'));
		});
		it('e.e1 Should return 51', function(){
			assert.equal(51, _.getFromPath(myTestObject, 'e.e1'));
		});
		it('e.e4.e51 Should return 511', function(){
			assert.equal(511, _.getFromPath(myTestObject, 'e.e4.e51'));
		});
		it('e.e4 Should return { e51: 511, e52: 512, e53: 513 }', function(){
			assert.equal(myTestObject.e.e4, _.getFromPath(myTestObject, 'e.e4'));
		});
	});
	describe('#setFromPath()', function(){
		it('setFromPath "f.f1" = 61', function(){
			_.setFromPath(myTestObject, 'f.f1', 61);

			assert.equal(61, _.getFromPath(myTestObject, 'f.f1'));
			assert.equal(61, myTestObject.f.f1);
		});

		it('setFromPath "f.f2" = { f21: 345, f22: 346 }', function(){
			_.setFromPath(myTestObject, 'f.f2', { f21: 345, f22: 346 });

			assert.equal(345, _.getFromPath(myTestObject, 'f.f2.f21'));
			assert.equal(345, myTestObject.f.f2.f21);

			assert.equal(346, _.getFromPath(myTestObject, 'f.f2.f22'));
			assert.equal(346, myTestObject.f.f2.f22);

			assert.equal(true, _.isEqual(_.getFromPath(myTestObject, 'f.f2'), { f21: 345, f22: 346 }));
			assert.equal(true, _.isEqual(myTestObject.f.f2, { f21: 345, f22: 346 }));
		});
	});

	describe('#eraseFromPath()', function(){
		it('eraseFromPath "f.f2.f22"', function(){
			_.eraseFromPath(myTestObject, 'f.f2.f22');

			assert.equal(null, _.getFromPath(myTestObject, 'f.f2.f22'));
			assert.equal(null, myTestObject.f.f2.f22);

			assert.equal(true, _.isEqual(_.getFromPath(myTestObject, 'f.f2'), { f21: 345 }));
			assert.equal(true, _.isEqual(myTestObject.f.f2, { f21: 345 }));
		});
		it('eraseFromPath "f.f2"', function(){
			_.eraseFromPath(myTestObject, 'f.f2');

			assert.equal(null, _.getFromPath(myTestObject, 'f.f2'));
			assert.equal(null, myTestObject.f.f2);
		});
	});
});
