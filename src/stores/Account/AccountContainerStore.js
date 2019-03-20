/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import { observable, action } from 'mobx';
import { toast, checkErrorCode } from '../../utils/utils';
import { doLogOut, getUserInfo } from '../../services/account';

class AccountContainerData {
    @observable loaded = false;
    @observable userInfo = {};

    @action logOut = async () => {
        const res = await doLogOut();
        if (checkErrorCode(res)) {
            toast('您已安全退出登录');
            this.userInfo = {};
        }
    };

    @action initUserInfo = async () => {
        const res = await getUserInfo();
        const { data } = res;
        if (data) {
            this.userInfo = Object.assign({}, this.userInfo, data);
        }
        this.loaded = true;
    };

    @action reset = () => {
        this.loaded = false;
        this.userInfo = {};
    }
}

const AccountContainerStore = new AccountContainerData();

export default AccountContainerStore;
