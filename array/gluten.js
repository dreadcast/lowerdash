import size from 'lodash/collection/size.js';
import clone from 'lodash/lang/clone.js';

/**
 *	Joins items from an array with a different glue before last item
 *	@method gluten
 *	@alias joinLast
 *	@param {Array} obj			Array to join
 *	@param {String} glue		Items delimiter
 *	@param {String} stick		Delimiter before last item
 *	@return {String}			Joined array
 */
export default function gluten(obj, glue, stick){
	obj = clone(obj);

	if(size(obj) == 1){
		return obj[0];
	}

	var last = obj.pop();

	return obj.join(glue) + stick + last;
}

export var joinLast = gluten;
