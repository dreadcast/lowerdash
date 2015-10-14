import size from 'lodash/collection/size';

/**
 *	Joins items from an array with a different glue before last item
 *	@method gluten
 *	@param {Array} obj			Array to join
 *	@param {String} glue		Items delimiter
 *	@param {String} stick		Delimiter before last item
 *	@return {String}			Joined array
 */
export default function gluten(obj, glue, stick){
    if(size(obj) == 1)
        return obj[0];

    var last = obj.pop();

    return obj.join(glue) + stick + last;
}

// var joinLast = gluten;
// export joinLast;
