/**
 *	Returns penultimate item from an array or null if array contains less than 2 items
 *	@method penultimate
 *	@param {Object} obj			Object or array to get penultimate item from
 *	@return {Mixed}				Penultimate item from provided array
 */
export default function penultimate(obj){
    return obj.length > 1 ? obj[obj.length - 2] : null;
}
