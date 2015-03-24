;(function(root){
	/**
	 * Useful mixins for Lodash
	 * @Class Lowerdash
	 * @Module Lodash
	 * @static
	 */
	if(typeof require == 'function'){
		var _ = require('lodash').runInContext();		
		
		if(typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports)
			module.exports = _;
	
	} else {
		var _ = root._;
	}
	
	/**
	 *	Creates an array containing passed argument or return argument if it is already an array.
	 *	@method from
	 *	@return {Array}				Created or existing array
	 */
	function from(arg){
		if(!_.isArray(arg) && !_.isArguments(arg))
			arg = [arg];
		
		return _.toArray(arg);
	}
	
	/**
	 *	Returns penultimate item from an array or null if array contains less than 2 items
	 *	@method penultimate
	 *	@param {Object} obj			Object or array to get penultimate item from
	 *	@return {Mixed}				Penultimate item from provided array
	 */
	function penultimate(obj){
		return obj.length > 1 ? obj[obj.length - 2] : null;
	}
	
	/**
	 *	Joins items from an array with a different glue before last item
	 *	@method joinLast
	 *	@param {Array} obj			Array to join
	 *	@param {String} glue		Items delimiter
	 *	@param {String} stick		Delimiter before last item
	 *	@return {String}			Joined array
	 */
	function joinLast(obj, glue, stick){
		var last = obj.pop();
		
		return obj.join(glue) + stick + last;
	}
	/**
	 *	Get property from object following provided path 
	 *	@method getFromPath
	 *	@param {Object} obj			Object to get property from
	 *	@param {String} path		Path to property (Dot-delimited)
	 *	@return {Mixed}				Property
	 */
	function getFromPath(obj, path){
		path = path.split('.');

		for(var i = 0, l = path.length; i < l; i++){
			if (hasOwnProperty.call(obj, path[i]))
				obj = obj[path[i]];
			
			else
				return null;
		}
		
		return obj;
	}
	
	/**
	 *	Set property of object following provided path 
	 *	@method setFromPath
	 *	@param {Object} obj			Destination object
	 *	@param {String} path		Path to property
	 *	@param {Mixed} value		Property value
	 *	@return {Object}			Object
	 */
	function setFromPath(obj, path, value){
		var parts = path.split('.');
		
		for(var i = 0, l = parts.length; i < l; i++){
			if(i < (l - 1) && !obj.hasOwnProperty(parts[i]))
				obj[parts[i]] = {};
	
			if(i == l - 1)
				obj[parts[i]] = value;
			
			else
				obj = obj[parts[i]];
		}
		
		return obj;
	}
	
	/**
	 *	Removes property of object following provided path 
	 *	@method eraseFromPath
	 *	@param {Object} obj			Object to remove property from
	 *	@param {String} path		Path to property
	 *	@return {Object}			Object
	 */
	function eraseFromPath(obj, path){
		var parts = path.split('.'),
			clone = obj;
		
		for(var i = 0, l = parts.length; i < l; i++){
			if (!obj.hasOwnProperty(parts[i])){
				break;
			
			} else if (i < l - 1){
				obj = obj[parts[i]];
				
			} else if(i == l - 1){
				delete obj[parts[i]];
				break;
			}
		}
		
		return clone;
	}
	
	/**
	 *	Retrieve object's key paired to given property 
	 *	@method keyOf
	 *	@param {Object} obj			Object to get key from
	 *	@param {Mixed} value		Value corresponding to key
	 *	@return {String}			Key or null if no key was found
	 */
	function keyOf(obj, value){
		for(var key in obj)
			if(Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === value)
				return key;

		return null;
	}
	
	/**
	 *	Lax isEqual, arrays are sorted and unique'd
	 *	@method isLaxEqual
	 *	@param {Mixed} a			Value to compare
	 *	@param {Mixed} b			Value to be compared
	 *	@return {Boolean}			Lax equality
	 */
	function isLaxEqual(a, b){
		if(_.isArray(a))
			a = _.uniq(a.sort());
			
		if(_.isArray(b))
			b = _.uniq(b.sort());
		
		return _.isEqual(a, b);
	}
	
	/*
	 *	Checks if passed argument is an iterable object, not an array or a function
	 *	@method isIterable
	 *	@param {Mixed} was			Object to be checked
	 *	@return {Boolean}			was is iterable
	 */
	function isIterable(was){
		return _.isObject(was) && !_.isFunction(was) && !_.isArray(was);
	}
	
	/*
	 *	Checks if passed string is a JSON encoded object
	 *	@method isJson
	 *	@param {String} was			String that must test the JSON validity
	 *	@return {Boolean}			was is a valid JSON
	 */
	function isJson(was){
		return _.isString(was) && _.isObject(JSON.parse(was));
	}
	
	/*
	 *	Checks if passed argument is shit (<code>null, 'null', undefined, '', false, 'false', 0, '0'</code>)
	 *	@method isShit
	 *	@param {Mixed} was			Object to test shitiness
	 *	@return {Boolean}			was is shit
	 */
	function isShit(was){
		if(_.isArray(was) && _compact(was).length == 0)
			return true;
		
		return _.contains([null, 'null', undefined, '', false, 'false', 0, '0'], was);
	}
	
	/**
	 *	Wait <code>next</code> cursor to be called before next iteration
	 *	@method eachAsync
	 *	@param {Object} obj			Object or array.
	 *	@param {Function} iterator	Iterator, invoked on each entry.
	 *								Passed arguments are <code>item</code>, <code>key</code> (if passed obj is iterable),
	 								<code>index</code>, <code>cursor</code> and passed <code>arr</code>.
	 *	@param {Function} [cb]		Callback invoked after last iteration.
	 *	@param {Object} [bind]	 	Object bound to iterator, default to passed <code>arr</code>.
	 *	@return {Object} arr		Passed object
	 *	@example
	 *		_.eachAsync([1, 2, 3, 4], function(item, index, cursor, ar){
	 *			new Request({
	 *				url: '/rest/' + index,
	 *				onSuccess: function(){
	 *					console.info('item #' + index + ' posted');
	 *					cursor();
	 *				}
	 *			}).post();
	 *		}, function(){ console.info('complete'); })
	 *
	 *		// Works with an array of functions...
	 *		_.eachAsync([function(cursor){
	 *			new Request({
	 *				url: '/some/url/123',
	 *				onSuccess: cursor
	 *			}).get();
	 *		}, function(cursor){
	 *			new Request({
	 *				url: '/some/url/456',
	 *				onSuccess: cursor
	 *			}).get();
	 *		}], function(item, index, cursor, ar){
	 *			item(cursor);
	 *		});
	 */
	
	function eachAsync(obj, iterator, cb, bind){
		if(_.size(obj) == 0)
			return cb.call(bind);
		
		var i = 0,
			hasKeys = _.isIterable(obj),
			values = hasKeys ? _.pairs(obj) : obj,
			size = _.size(values);

		function loop(){
			var cursor;
			
			if(i >= size)
				cursor = function(){};

			else if(i == size - 1 && _.isFunction(cb))
				cursor = function(){
					cb.call(bind);
					loop();
				};
				
			else if(i < size)
				cursor = function(){
					loop();
				};
			
			if(i < size){	
				if(hasKeys)
					iterator.call(bind, values[i][1], values[i][0], cursor, obj);	
				
				else			
					iterator.call(bind, values[i], i, cursor, obj);	
			}
			
			i++;
		};
			
		loop();
		
		return obj;
	}
	
	/**
	 *	Invoke passed iterator on each passed array entry
	 *	All iterations are concurrents
	 *	@method eachParallel
	 *	@param {Object} obj			Object or array.
	 *	@param {Function} iterator	Iterator, invoked on each obj entry.
	 *								Passed arguments are <code>item</code>, <code>index</code> or
	 								<code>key</code> (if passed object is iterable),
	 								<code>cursor</code> and passed <code>arr</code>.
	 *	@param {Function} [cb]		Callback invoked when last iteration is done.
	 *	@param {Number} [max]		Amount of concurrent tasks.
	 *	@param {Object} [bind]	 	Object bound to iterator, default to passed <code>arr</code>.
	 */
	function eachParallel(obj, iterator, cb, max, bind){
		if(!_.isFinite(max))
			max = _.size(obj);
						
		var stepsToGo = _.size(obj),
			chunks = _.isIterable(obj) ? _.norris(obj, max) : _.chunk(obj, max);
		
		_.eachAsync(chunks, function(chunk, chunkKey, chunkCursor){
			var chunkIndex = 0;
			
			_.each(chunk, function(item, key){
				function cursor(){
					stepsToGo--;
					
					if(chunkIndex + 1 == max || stepsToGo == 0)
						chunkCursor();
						
					chunkIndex++;
				};
			
				iterator.call(bind, item, key, cursor, obj);
			});
		}, cb, bind);
		
		return obj;
	}
	
	/**
	 *	Wait <code>next</code> n ms to call next iteration. Alias: eachInterval
	 *	@method eachDelayed
	 *	@param {Object} obj			Object or array.
	 *	@param {Function} iterator	Iterator, invoked on each entry.
	 *								Passed arguments are <code>item</code>, <code>key</code> (if passed object is iterable),
	 								<code>index</code>, <code>cursor</code> and passed <code>arr</code>.
	 *	@param {Function} [cb]		Callback invoked after last iteration.
	 *	@param {Function} [delay]	Delay between each iteration.
	 *	@param {Object} [bind]	 	Object bound to iterator, default to passed <code>arr</code>.
	 *	@return {Object} arr		Passed object
	 *	@alias	eachInterval
	 */
	function eachDelayed(arr, iterator, cb, delay, bind){
		return _.eachAsync(arr, function(){
			setTimeout(function(){
				iterator.apply(this, arguments);
			}.bind(bind || this), delay);
		}, cb, bind);
	}
	
	/**
	 *	Chunks a plain object
	 *	Lodash cannot have chunk() without norris()
	 *	@method norris
	 *	@param {Object} obj			Object.
	 *	@param {Number} chunkSize	Chunk size.
	 *	@return {Array}			 	Chunked object.
	 */
	function norris(obj, chunkSize){
		return _.chain(obj)
			.pairs()
			.chunk(chunkSize)
			.map(function(pairs){
				var chunkedObj = {};
				
				_.each(pairs, function(pair){
					chunkedObj[pair[0]] = pair[1];
				});
				
				return chunkedObj;
			})
			.value();
	}
	
	/**
	 *	Find value closest to given number in an array of numbers 
	 *	@method closest
	 *	@return {Number}			Closest value
	 */
	function closest(obj, number){		
		if((current = obj.length) < 2)
			return l - 1;
			
		for(var current, previous = Math.abs(obj[--current] - number); current--;)
			if(previous < (previous = Math.abs(obj[current] - number)))
				break;
				
		return obj[current + 1];
	
		var closest = -1,
			prev = Math.abs(obj[0] - number);
		
		for (var i = 1; i < obj.length; i++){
			var diff = Math.abs(obj[i] - number);
			
			if (diff <= prev){
				prev = diff;
				closest = obj[i];
			}
		}
		
		return closest;
	}

	/**
	 *	Replace item at index i with given item
	 *	@method replaceAt
	 *	@return {Array}				Array instance
	 */
	function replaceAt(arr, item, i){
		arr.splice(i, 1, item);
		
		return arr;
	}
	
	/**
	 *	Insert item at index i
	 *	@method insertAt
	 *	@return {Array}				Array instance
	 */
	function insertAt(arr, item, i){
		arr.splice(i, 0, item);
		
		return arr;
	}
	
	/**
	 *	Attempts to execute function, return false if fails
	 *	@method attempt
	 *	@param {Function} fn		Function to execute
	 *	@param {Mixed} arguments*	Arguments to pass to function
	 *	@return {Mixed} 			Function result or false
	 */
	function attempt(fn){
		try {
			var args = _.from(arguments);
			args.shift();
			
			return fn.apply(this, args);
		} catch(e){
			return false;
		}
	}

	_.mixin({
		// Utils
		isLaxEqual: isLaxEqual,
		isIterable: isIterable,
		isJson: isJson,
		isShit: isShit,
	
		// Iterate
		eachAsync: eachAsync,
		eachParallel: eachParallel,
		eachDelayed: eachDelayed,
		eachInterval: eachDelayed,
		
		// Object
		getFromPath: getFromPath,
		setFromPath: setFromPath,
		eraseFromPath: eraseFromPath,
		keyOf: keyOf,
		norris: norris,
		

		// Array
		from: from,
		penultimate: penultimate,
		joinLast: joinLast,
		gluten: joinLast,
		closest: closest,
		replaceAt: replaceAt,
		insertAt: insertAt,
		
		// Function
		attempt: attempt
	});
	
})(Function('return this')());