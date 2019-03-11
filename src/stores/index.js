/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import StudyStore from './Study';
import AccountStore from './Account';
import OthersStore from './Others';

const store = {
    ...StudyStore,
    ...AccountStore,
    ...OthersStore,
};

export default store;
