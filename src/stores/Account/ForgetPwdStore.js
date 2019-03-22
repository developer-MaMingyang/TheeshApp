/*
* author: mamingyang@baofeng.com
* date: 2019/3/13
*/

import { observable, action } from 'mobx';
import { doForgetPwd, getMsg } from '../../services/account';
import { checkErrorCode, toast } from '../../utils/utils';
import { checkMsgVc, checkPhone, checkPwd } from '../../utils/rules';

class ForgetPwdData {
    @observable userAcc = '';
    @observable msgVc = '';
    @observable msgLeftTime = -1;
    @observable msgInterval = null;
    @observable newPwd = '';

    @action modifyPwd = async () => {
        if (!checkPhone(this.userAcc)) {
            return;
        }
        if (!checkMsgVc(this.msgVc)) {
            return;
        }
        if (!checkPwd(this.userPwd)) {
            return;
        }
        const res = await doForgetPwd({
            phone: this.userAcc,
            password: this.newPwd,
            code: this.msgVc,
        });
        if (checkErrorCode(res)) {
            toast('修改密码成功');
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
        this.userAcc = '';
        this.msgVc = '';
        this.newPwd = '';
    }
}

const ForgetPwdStore = new ForgetPwdData();

export default ForgetPwdStore;
