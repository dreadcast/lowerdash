import aFrom from './../array/from';

/**
 *	Attempts to execute function, return false if fails
 *	@method attempt
 *	@param {Function} fn		Function to execute
 *	@param {T} arguments*	Arguments to pass to function
 *	@return {T} 			Function result or false
 */
function attempt(fn){
    try {
        var args = aFrom(arguments);
        args.shift();

        return fn.apply(this, args);
    } catch(e){
        return false;
    }
}
