/**
 *	Set property of object following provided path
 *	@method setFromPath
 *	@param {Object} obj			Destination object
 *	@param {String} path		Path to property
 *	@param {T} value		    Property value
 *	@return {Object}			Object
 */
export default function setFromPath(obj, path, value){
    var parts = path.split('.');

    for(var i = 0, l = parts.length; i < l; i++){
        if(i < (l - 1) && !obj.hasOwnProperty(parts[i]))
            obj[parts[i]] = {};

        if(i == l - 1)
            obj[parts[i]] = value;

        else
            obj = obj[parts[i]];
    }

    return obj;
}
