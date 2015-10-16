require('babel/register')({
    stage: 0
});

var _ = require('../lodash'),
	assert = require('assert'),
	myTestObject = require('./testobject.js');

describe('Lowerdash utils', function(){
	describe('#straitjacket(fn, defaultValue)', function(){
		var straitjacketed = _.straitjacket(function(a, b){
			return a + b;
		}, false);

		var straitjacketed2 = _.straitjacket(function(a, b){
			return c;
		}, 'bobo');

		it('var straitjacketed = straitjacket(function(a, b){ return a + b; }, false); straitjacketed(1, 2) should return 3', function(){
			assert.equal(3, straitjacketed(1, 2));
		});
		it('straitjacketed2 = straitjacket(function(a, b){ return c; }, \'bobo\'); straitjacketed2(1, 2) should return "bobo"', function(){
			assert.equal('bobo', straitjacketed2(1, 2));
		});
	});


	describe('#isJson(String was)', function(){
		var goodJson = '{"e51":511,"e52":512,"e53":513}',
			badJson = '{"e51:511,"e52":512,"e53":513}';

		it('{"e51":511,"e52":512,"e53":513} is valid JSON', function(){
			assert.equal(true, _.isJson(goodJson));
		});
		it('JSON.stringify(myTestObject) is valid JSON', function(){
			assert.equal(true, _.isJson(JSON.stringify(myTestObject)));
		});

		it('myTestObject is not valid JSON', function(){
			assert.equal(false, _.isJson(myTestObject));
		});
		it('{"e51:511,"e52":512,"e53":513} is not valid JSON', function(){
			assert.equal(false, _.isJson(badJson));
		});
	});


	describe('#isShit(Mixed was)', function(){
		//null, 'null', undefined, '', false, 'false', 0, '0'
		it('null is shit', function(){
			assert.equal(true, _.isShit(null));
		});
		it('"null" is shit', function(){
			assert.equal(true, _.isShit('null'));
		});
		it('undefined is shit', function(){
			assert.equal(true, _.isShit());
		});
		it('"" is shit', function(){
			assert.equal(true, _.isShit(''));
		});
		it('false is shit', function(){
			assert.equal(true, _.isShit(false));
		});
		it('Boolean() is shit', function(){
			assert.equal(true, _.isShit(Boolean()));
		});
		it('Boolean(false) is shit', function(){
			assert.equal(true, _.isShit(Boolean(false)));
		});
		it('Boolean("false") is shit', function(){
			assert.equal(false, _.isShit(Boolean('false')));
		});
		it('1 == 2 is shit', function(){
			assert.equal(true, _.isShit(1 == 2));
		});
		it('"false" is shit', function(){
			assert.equal(true, _.isShit('false'));
		});
		it('true is not shit', function(){
			assert.equal(false, _.isShit(true));
		});
		it('0 is shit', function(){
			assert.equal(true, _.isShit(0));
		});
		it('"0" is shit', function(){
			assert.equal(true, _.isShit('0'));
		});
	});
});
