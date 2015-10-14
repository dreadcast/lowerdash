import isFinite from 'lodash/lang/isFinite';
import size from 'lodash/collection/size';
import isIterable from './../lang/isIterable';
import norris from './../object/norris';
import chunk from 'lodash/array/chunk';
import eachAsync from './eachAsync';
import each from 'lodash/collection/each';

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
export default function eachParallel(obj, iterator, cb, max, bind){
    if(!isFinite(max))
        max = size(obj);

    var stepsToGo = size(obj),
        chunks = isIterable(obj) ? norris(obj, max) : chunk(obj, max);

    eachAsync(chunks, function(chunk, chunkKey, chunkCursor){
        var chunkIndex = 0;

        each(chunk, function(item, key){
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
