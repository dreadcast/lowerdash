import isArray from 'lodash/lang/isArray';
import isArguments from 'lodash/lang/isArguments';
import toArray from 'lodash/lang/toArray';

/**
 *	Creates an array containing passed argument or return argument if it is already an array.
 *	@method arry
 *	@return {Array}				Created or existing array
 */
export default function arry(arg){
    if(!isArray(arg) && !isArguments(arg))
        arg = [arg];

    return toArray(arg);
}
