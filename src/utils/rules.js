/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import { toast } from './utils';

// 校验手机号
export const checkPhone = (value) => {
    if (value === '') {
        toast('请输入手机号');
        return false;
    }
    if (!(/^(0|86|17951)?(1[3456789][0-9])[0-9]{8}$/.test(value))) {
        toast('请输入正确的手机号');
        return false;
    }
    return true;
};

// 校验密码：必填且6-16位非空白字符
export const checkPwd = (value) => {
    if (value === '') {
        toast('请输入密码');
        return false;
    }
    if (/\s/.test(value) || !(/^\S{6,16}$/.test(value))) {
        toast('密码应为6-16位字母，数字或英文符号组成');
        return false;
    }
    return true;
};

// 校验图形验证码：4位中英文数字
export const checkImgVc = (value) => {
    if (value === '') {
        toast('请输入图形验证码');
        return false;
    }
    if (!/^[a-zA-Z0-9]{4}$/.test(value)) {
        toast('请输入正确的图形验证码');
        return false;
    }
    return true;
};

// 校验短信验证码：6位纯数字
export const checkMsgVc = (value) => {
    if (value === '') {
        toast('请输入短信验证码');
        return false;
    }
    if (!/^[0-9]{4}$/.test(value)) {
        toast('请输入正确的短信验证码');
        return false;
    }
    return true;
};
