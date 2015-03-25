var _ = require('../src/lowerdash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js'),
	fibonacci = require('./fibonacci'),
	fs = require('fs'),
	Path = require('path');
	
describe('Lowerdash async', function(){
	describe('#eachAsync(Object/Array obj, Function iterator, Function done)', function(){
		var collector = [],
			index = 0;

		before(function(done){
			_.eachAsync(myTestObject, function(item, key, cursor){
				index++;
				
				collector.push(item);
				assert.equal(undefined, collector[index]);
				
				setTimeout(function(){
					cursor();
					assert.equal(myTestObject.key, collector[index]);
				}, 10);
			}, done);
		});
			
		it('collector size should equal 6', function(){
			assert.equal(6, _.size(collector));
			assert.equal(6, collector.length);
		});
		it('collector #0 should equal 1', function(){
			assert.equal(1, collector[0]);
			assert.equal(myTestObject.a, collector[0]);
		});
		it('collector last should equal "You can\'t chunk norris"', function(){
			assert.equal('You can\'t chunk norris', _.last(collector));
			assert.equal(myTestObject.motto, _.last(collector));
		});
	});

	describe('#eachAsync fibonacci -> collector', function(){
		var collector = [];
		
		before(function(done){
			_.eachAsync(fibonacci, function(item, index, cursor){
				collector.push(item)
				assert.equal(undefined, collector[index + 1]);
				
				setTimeout(function(){
					cursor();
					assert.equal(fibonacci[index + 1], collector[index + 1]);
				}, 10);
			}, done);
		});
		
		it('When done, compare length equality between fibonacci & collector', function(){
			assert.equal(fibonacci.length, collector.length);
		});
		it('When done, compare equality between fibonacci & collector', function(){
			assert.equal(true, _.isEqual(fibonacci, collector));
		});
	});

	describe('#eachAsync read dir "' + __dirname + '"', function(){
		var collector = {},
			keys;
			
		before(function(done){
			fs.readdir(__dirname, function(err, files){
				if(err)
					throw new Error(err);
					
				_.eachAsync(files, function(file, index, cursor){
					fs.stat(__dirname + '/' + file, function(err, stat){
						if(err)
							throw new Error(err);

						collector[file] = stat;
						cursor();
					});
				}, function(){
					keys = _.keys(collector);
					
					done();
				});
			});
		});
		
		describe('#eachAsync check keys', function(){
			it('collector has a key named "' + Path.basename(__filename) + '"', function(){
				assert.equal(true, _.contains(keys, Path.basename(__filename)));
			});
			it('collector has a key named "fibonacci.js"', function(){
				assert.equal(true, _.contains(keys, 'fibonacci.js'));
			});
		});
	});
});