/**
 *	Replace item at index i with given item
 *	@method replaceAt
 *	@return {Array}				Array instance
 */
export default function replaceAt(arr, item, i){
	arr.splice(i, 1, item);

	return arr;
}
