import uniq from 'lodash/array/uniq';
import isArray from 'lodash/lang/isArray';
import isEqual from 'lodash/lang/isEqual';

/**
 *	Lax isEqual, arrays are sorted and unique'd
 *	@method isLaxEqual
 *	@param {T} a			Value to compare
 *	@param {T} b			Value to be compared
 *	@return {Boolean}			Lax equality
 */
export default function isLaxEqual(a, b){
    if(isArray(a)){
        a = uniq(a.sort());
    }

    if(isArray(b)){
        b = uniq(b.sort());
    }

    return isEqual(a, b);
}
