/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import { observable, action } from 'mobx';
import { toast, checkErrorCode } from '../../utils/utils';
import { doLogin } from '../../services/account';

class LoginData {
    @observable userAcc = '';
    @observable userPwd = '';

    @action login = async () => {
        const res = await doLogin({
            phone: this.userAcc,
            password: this.userPwd,
        });
        console.log({
            phone: this.userAcc,
            password: this.userPwd,
            res,
        });
        if (checkErrorCode(res)) {
            toast('登录成功');
            return this.userAcc;
        }
        return '';
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