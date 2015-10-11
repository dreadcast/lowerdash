import size from 'lodash/collection/size';
import pairs from 'lodash/array/pairs';
import isIterable from './../lang/isIterable';
import isFunction from 'lodash/lang/isFunction';

/**
 *	Wait <code>next</code> resolve to be called before next iteration
 *	@method eachAsync
 *	@param {Object} obj			Object or array.
 *	@param {Function} iterator	Iterator, invoked on each entry.
 *								Passed arguments are <code>item</code>, <code>key</code> (if passed obj is iterable),
                                <code>index</code>, <code>resolve</code> and passed <code>arr</code>.
 *	@param {Function} [cb]		Callback invoked after last iteration.
 *	@param {Object} [bind]	 	Object bound to iterator, default to passed <code>arr</code>.
 *	@return {Object} arr		Passed object
 *	@example
 *		_.eachAsync([1, 2, 3, 4], function(item, index, resolve, ar){
 *			new Request({
 *				url: '/rest/' + index,
 *				onSuccess: function(){
 *					console.info('item #' + index + ' posted');
 *					resolve();
 *				}
 *			}).post();
 *		}, function(){ console.info('complete'); })
 *
 *		// Works with an array of functions...
 *		_.eachAsync([function(resolve){
 *			new Request({
 *				url: '/some/url/123',
 *				onSuccess: resolve
 *			}).get();
 *		}, function(resolve){
 *			new Request({
 *				url: '/some/url/456',
 *				onSuccess: resolve
 *			}).get();
 *		}], function(item, index, resolve, ar){
 *			item(resolve);
 *		});
 */
export default function eachAsync(obj, iterator, cb, bind){
    if(size(obj) == 0){
        return cb.call(bind);
    }

    var i = 0,
        hasKeys = isIterable(obj),
        values = hasKeys ? pairs(obj) : obj,
        objSize = size(values);

    function loop(){
        var resolve;

        if(i >= objSize){
            resolve = function(){};

        } else if(i == objSize - 1 && isFunction(cb)){
            resolve = function(){
                cb.call(bind);
                loop();
            };

        } else if(i < objSize){
            resolve = function(){
                loop();
            };
        }

        if(i < objSize){
            if(hasKeys){
                iterator.call(bind, values[i][1], values[i][0], resolve, obj);

            } else {
                iterator.call(bind, values[i], i, resolve, obj);
            }
        }

        i++;
    };

    loop();

    return obj;
}
