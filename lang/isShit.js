import isArray from 'lodash/lang/isArray';
import compact from 'lodash/array/compact';
import contains from 'lodash/collection/contains';

/**
 *	Checks if passed argument is shit (<code>null, 'null', undefined, '', false, 'false', 0, '0'</code>)
 *	@method isShit
 *	@param {Mixed} was			Object to test shitiness
 *	@return {Boolean}			was is shit
 */
export default function isShit(was){
	if(isArray(was) && compact(was).length == 0)
		return true;

	return contains([null, 'null', undefined, '', false, 'false', 0, '0'], was);
}
