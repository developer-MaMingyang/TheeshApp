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
}); // 注册：phone, type: register

export const doRegister = (phone, password, code) => request(`${root}/user/register`, {
    body: { phone, password, code },
});