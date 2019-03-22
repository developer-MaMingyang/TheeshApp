/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import { observable, action } from 'mobx';
import { toast, checkErrorCode } from '../../utils/utils';
import { doRegister, getMsg } from '../../services/account';
import { checkMsgVc, checkPhone, checkPwd } from '../../utils/rules';

class RegisterData {
    @observable nickName = '';
    @observable userAcc = '';
    @observable userPwd = '';
    @observable msgVc = '';
    @observable msgLeftTime = -1;
    @observable msgInterval = null;

    @action register = async () => {
        if (!checkPhone(this.userAcc)) {
            return;
        }
        if (!checkMsgVc(this.msgVc)) {
            return;
        }
        if (!checkPwd(this.userPwd)) {
            return;
        }
        const res = await doRegister({
            nickName: this.nickName,
            phone: this.userAcc,
            password: this.userPwd,
            code: this.msgVc,
        });
        if (checkErrorCode(res)) {
            toast('注册成功，快去登录吧');
            return true;
        }
        return false;
    };

    @action startMsgInterval = () => {
        this.msgLeftTime = 120;
        this.msgInterval = setInterval(() => {
            if (this.msgLeftTime > -1) {
                this.msgLeftTime = this.msgLeftTime - 1;
            } else {
                clearInterval(this.msgInterval);
            }
        }, 1000);
    };

    @action stopMsgInterval = () => {
        clearInterval(this.msgInterval);
        this.msgLeftTime = -1;
    };

    @action getMsgVc = async () => {
        this.startMsgInterval();
        const res = await getMsg({
            phone: this.userAcc,
        });
        if (checkErrorCode(res)) {
            toast('验证码已发送，请注意查收');
        } else {
            this.stopMsgInterval();
        }
    };

    @action setData = (key, value) => {
        this[key] = value;
    };

    @action reset = () => {
        this.nickName = '';
        this.userAcc = '';
        this.userPwd = '';
        this.msgVc = '';
    }
}

const RegisterStore = new RegisterData();

export default RegisterStore;