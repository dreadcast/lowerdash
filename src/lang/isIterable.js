import isEqual from 'lodash/lang/isEqual';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';

/**
 *	Checks if passed argument is an iterable object, not an array or a function
 *	@method isIterable
 *	@param {Mixed} was			Object to be checked
 *	@return {Boolean}			was is iterable
 */
export default function isIterable(was){
    return isObject(was) && !isFunction(was) && !isArray(was);
}
