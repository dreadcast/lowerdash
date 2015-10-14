import assign from 'lodash/object/assign';
import array from './es/array';
import collection from './es/collection';
import lang from './es/lang';
import object from './es/object';
import utility from './es/utility';

export default assign({}, array, collection, lang, object, utility);
