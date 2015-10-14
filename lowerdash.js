import assign from 'lodash/object/assign';
import array from './array';
import collection from './collection';
import lang from './lang';
import object from './object';
import utility from './utility';

export default assign({}, array, collection, lang, object, utility);
