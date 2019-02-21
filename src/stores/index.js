/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import StudyStore from './Study';
import AccountStore from './Account';

const store = {
    ...StudyStore,
    ...AccountStore,
};

export default store;
