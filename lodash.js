import lodash from 'lodash';
import lowerdash from './lowerdash.js';

export default lodash
    .runInContext()
    .mixin(lowerdash);
