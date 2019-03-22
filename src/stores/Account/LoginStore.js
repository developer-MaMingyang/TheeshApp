/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import { observable, action } from 'mobx';
import { toast, checkErrorCode } from '../../utils/utils';
import { doLogin } from '../../services/account';
import { checkPhone, checkPwd } from '../../utils/rules';

class LoginData {
    @observable userAcc = '';
    @observable userPwd = '';

    @action login = async () => {
        if (!checkPhone(this.userAcc)) {
            return;
        }
        if (!checkPwd(this.userPwd)) {
            return;
        }
        const res = await doLogin({
            phone: this.userAcc,
            password: this.userPwd,
        });
        if (checkErrorCode(res)) {
            toast('登录成功');
            return true;
        }
        return false;
    };

    @action setData = (key, value) => {
        this[key] = value;
    };

    @action reset = () => {
        this.userAcc = '';
        this.userPwd = '';
    }
}

const LoginStore = new LoginData();

export default LoginStore;