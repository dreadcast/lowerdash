import lodash from 'lodash';

import array from './array';
import collection from './collection';
import lang from './lang';
import object from './object';
import utility from './utility';

var lowerdash = { array, collection, lang, object, utility };
export lowerdash;


lodash = lodash
    .runInContext()
    .mixin(lowerdash);

export default lodash;
