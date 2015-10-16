import arry from './../array/arry.js';

/**
 *	Return a wrapped function that will catch errors and return provided defaultValue or undefined
 *	@method straitjacket
 *	@param {Function} fn			Function to catch errors from
 *	@param {Mixed} [defaultValue]	Returned value if invoking wrapped function fails
 *	@return {Mixed} 				Function result or false
 */
export default function straitjacket(fn, defaultValue){
    return function(){
        try {
            var args = arry(arguments);

            return fn.apply(this, args);
        } catch(e){
            return defaultValue;
        }
    }
}
