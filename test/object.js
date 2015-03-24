var _ = require('../src/lowerdash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js');

describe('Lowerdash object', function(){
	describe('#keyOf()', function(){
		it('Key of value "1" should be "a"', function(){
			assert.equal('a', _.keyOf(myTestObject, 1));
		});
	});
	
	describe('#norris()', function(){
		describe('#norris() by 2', function(){
			var chunkBy2 = _.norris(myTestObject, 2);
			
			it('All chunk\'s length should equal 2', function(){
				assert.equal(2, _.size(chunkBy2[0]));
				assert.equal(2, _.size(chunkBy2[1]));
				assert.equal(2, _.size(chunkBy2[2]));
			});
			
			it('First chunk\'s "a" should equal 1', function(){
				assert.equal(1, chunkBy2[0].a);
				assert.equal(true, chunkBy2[0].a == 1);
				assert.equal(undefined, chunkBy2[0].c);
			});
			it('Second chunk\'s "d" should equal 4', function(){
				assert.equal(4, chunkBy2[1].d);
				assert.equal(true, chunkBy2[1].d == 4);
				assert.equal(undefined, chunkBy2[1].a);
			});
			it('Third chunk\'s "motto" should equal "You can\'t chunk norris"', function(){
				var motto = 'You can\'t chunk norris';
				assert.equal(motto, chunkBy2[2].motto);
	 			assert.equal(true, chunkBy2[2].motto == motto);
			});
		});
		describe('#norris() by 3', function(){
			var chunkBy3 = _.norris(myTestObject, 3);
			
			it('All chunk\'s length should equal 3', function(){
				assert.equal(3, _.size(chunkBy3[0]));
				assert.equal(3, _.size(chunkBy3[1]));
			});
			
			it('First chunk\'s "a" should equal 1', function(){
				assert.equal(1, chunkBy3[0].a);
				assert.equal(true, chunkBy3[0].a == 1);
				assert.equal(2, chunkBy3[0].b);
				assert.equal(3, chunkBy3[0].c);
			});
			it('Second chunk\'s "d" should equal 4 and "motto" should equal "You can\'t chunk norris"', function(){
				assert.equal(4, chunkBy3[1].d);
				assert.equal(true, chunkBy3[1].d == 4);
				assert.equal(undefined, chunkBy3[1].a);

				var motto = 'You can\'t chunk norris';

				assert.equal(motto, chunkBy3[1].motto);
	 			assert.equal(true, chunkBy3[1].motto == motto);
				
			it('Third chunk should be undefined', function(){
				assert.equal(undefined, chunkBy3[2]);
			});
			});
		});
	});
});