/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import request from '../utils/request';
import { root } from '../utils/constants';

export const doLogOut = () => request(`${root}/user/logout`);
