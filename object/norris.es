import pairs from 'lodash/object/pairs';
import each from 'lodash/collection/each';
import map from 'lodash/collection/map';
import chunk from 'lodash/array/chunk';

/**
 *	Chunks a plain object
 *	Lodash cannot have chunk() without norris()
 *	@method norris
 *	@param {Object} obj			Object.
 *	@param {Number} chunkSize	Chunk size.
 *	@return {Array}			 	Chunked object.
 */
export default function norris(obj, chunkSize){
    return map(
        chunk(
            pairs(obj), chunkSize
        ),
        function(pairs){
            var chunkedObj = {};

            each(pairs, function(pair){
                chunkedObj[pair[0]] = pair[1];
            });

            return chunkedObj;
        }
    );
}
