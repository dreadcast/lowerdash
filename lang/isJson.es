import isString from 'lodash/lang/isString';
import isObject from 'lodash/lang/isObject';

/**
 *	Checks if passed string is a JSON encoded object
 *	@method isJson
 *	@param {String} was			String that must test the JSON validity
 *	@return {Boolean}			was is a valid JSON
 */
export default function isJson(was){
    try {
        return isString(was) && isObject(JSON.parse(was));

    } catch(e){
        return false;
    }
}
