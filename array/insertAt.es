/**
 *	Insert item at index i
 *	@method insertAt
 *	@return {Array}				Array instance
 */
function insertAt(arr, item, i){
    arr.splice(i, 0, item);

    return arr;
}
