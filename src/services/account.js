/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import request from '../utils/request';
import { root } from '../utils/constants';

export const doLogOut = () => request(`${root}/user/logout`);

export const doLogin = ({ phone, password }) => request(`${root}/user/login`, {
    body: { phone, password },
});

export const getMsg = params => request(`${root}/user/sendMessage`, {
    body: { params },
}); // 注册：phone, type: register，type目前不传

export const doRegister = ({ nickName, phone, password, code }) => request(`${root}/user/register`, {
    body: { nickName, phone, password, code },
});
