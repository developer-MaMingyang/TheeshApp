/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import { observable, action } from 'mobx';
import { toast, checkErrorCode } from '../../utils/utils';
import { doLogOut } from '../../services/account';

class AccountContainerData {
    @observable userInfo = { userAcc: '' };

    @action logOut = async () => {
        const res = await doLogOut();
        if (checkErrorCode(res)) {
            toast('您已安全退出登录');
            this.userInfo.userAcc = '';
        }
    };

    @action initUserInfo = (userAcc) => {
        this.userInfo = { userAcc };
    }
}

const AccountContainerStore = new AccountContainerData();

export default AccountContainerStore;