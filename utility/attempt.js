import arry from './../array/arry';

/**
 *	Attempts to execute function, return false if fails
 *	@method attempt
 *	@param {Function} fn		Function to execute
 *	@param {Mixed} arguments*	Arguments to pass to function
 *	@return {Mixed} 			Function result or false
 */
function attempt(fn){
    try {
        var args = arry(arguments);
        args.shift();

        return fn.apply(this, args);

    } catch(e){
        return false;
    }
}
