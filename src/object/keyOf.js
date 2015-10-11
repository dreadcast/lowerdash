/**
 *	Retrieve object's key paired to given property
 *	@method keyOf
 *	@param {Object} obj			Object to get key from
 *	@param {T} value		Value corresponding to key
 *	@return {String}			Key or null if no key was found
 */
function keyOf(obj, value){
    for(var key in obj)
        if(Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === value)
            return key;

    return null;
}
