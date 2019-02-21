/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import { observable, action } from 'mobx';
import { doLogOut } from '../../services/account';

class AccountContainerData {
    @observable userInfo = {};

    @action logOut = async () => {
        await doLogOut();
        this.userInfo = Object.assign({}, this.userInfo, {});
    }
}

const AccountContainerStore = new AccountContainerData();

export default AccountContainerStore;