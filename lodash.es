import lodash from 'lodash';
import lowerdash from './lowerdash';

export default lodash
    .runInContext()
    .mixin(lowerdash);
