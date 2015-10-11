import chain from 'lodash/chain/chain';
import value from 'lodash/chain/value';
import size from 'lodash/collection/size';
import pairs from 'lodash/array/pairs';
import each from 'lodash/collection/each';

/**
 *	Chunks a plain object
 *	Lodash cannot have chunk() without norris()
 *	@method norris
 *	@param {Object} obj			Object.
 *	@param {Number} chunkSize	Chunk size.
 *	@return {Array}			 	Chunked object.
 */
export default function norris(obj, chunkSize){
    return chain(obj)
        .pairs()
        .chunk(chunkSize)
        .map(function(pairs){
            var chunkedObj = {};

            each(pairs, function(pair){
                chunkedObj[pair[0]] = pair[1];
            });

            return chunkedObj;
        })
        .value();
}
