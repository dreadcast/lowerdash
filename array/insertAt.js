/**
 *	Insert item at index i
 *	@method insertAt
 *	@return {Array}				Array instance
 */
export default function insertAt(arr, item, i){
	arr.splice(i, 0, item);

	return arr;
}
