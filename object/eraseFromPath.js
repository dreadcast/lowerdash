/**
 * Removes property of object following provided path
 * @method eraseFromPath
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} obj			Object to remove property from
 * @param {String} path		Path to property
 * @return {Object}			Object
 */
export default function eraseFromPath(obj, path){
	var parts = path.split('.'),
		clone = obj;

	for(var i = 0, l = parts.length; i < l; i++){
		if (!obj.hasOwnProperty(parts[i])){
			break;

		} else if (i < l - 1){
			obj = obj[parts[i]];

		} else if(i == l - 1){
			delete obj[parts[i]];
			break;
		}
	}

	return clone;
}
