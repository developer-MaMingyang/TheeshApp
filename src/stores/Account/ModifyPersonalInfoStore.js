/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import { observable, action } from 'mobx';
import AccountContainerStore from './AccountContainerStore';
import { modifyUserInfo } from '../../services/account';
import { checkErrorCode, toast } from '../../utils/utils';

class ModifyPersonalInfoData {
    @action setPhoto = async (arr) => {
        const photo = arr[0];
    };

    @action doModifyInfo = async ({ nickName, gender, description }) => {
        if (!nickName) {
            toast('提示：请填写您的昵称');
            return false;
        }
        const res = await modifyUserInfo({ nickName, gender, description });
        const a = { nickName, gender, description };
        console.log(a);
        console.log(res);
        if (!checkErrorCode(res)) {
            return false;
        }
        toast('提示：已成功更新您的个人信息');
        AccountContainerStore.initUserInfo();
    }
}

const ModifyPersonalInfoStore = new ModifyPersonalInfoData();

export default ModifyPersonalInfoStore;
