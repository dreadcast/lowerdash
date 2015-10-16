/**
 *	Get property from object following provided path
 *	@method getFromPath
 *	@param {Object} obj			Object to get property from
 *	@param {String} path		Path to property (Dot-delimited)
 *	@return {Mixed}				Property
 */
export default function getFromPath(obj, path){
	path = path.split('.');

	for(var i = 0, l = path.length; i < l; i++){
		if (hasOwnProperty.call(obj, path[i]))
			obj = obj[path[i]];

		else
			return null;
	}

	return obj;
}
