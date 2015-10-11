import eachAsync from './eachAsync';

/**
 *	Wait <code>next</code> n ms to call next iteration.
 *	@method eachDelayed
 *	@alias eachInterval
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
export default function eachDelayed(obj, iterator, cb, delay, bind){
    return eachAsync(obj, function(){
        setTimeout(function(){
            iterator.apply(this, arguments);
        }.bind(bind || this), delay);
    }, cb, bind);
}

export eachInterval = eachDelayed;
