/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import { observable, action } from 'mobx';
import { getUploadImageToken, modifyUserInfo } from '../../services/account';
import { checkErrorCode, toast } from '../../utils/utils';
import '../../libs/aliyun-upload-sdk-1.5.0.min';
import '../../libs/aliyun-oss-sdk-5.3.1.min';

class ModifyPersonalInfoData {
    @action setPhoto = async (arr) => {
        // const photo = arr[0];
        const res = await getUploadImageToken();
        if (!checkErrorCode(res)) {
            return;
        }
        const { data } = res;
        console.log(res);
    };

    @action doModifyInfo = async ({ userId, nickName, description }) => {
        if (!nickName) {
            toast('提示：请填写您的昵称');
            return;
        }
        const res = await modifyUserInfo({ id: userId, nickName, description });
        console.log(res);
        if (!checkErrorCode(res)) {
            return;
        }
        toast('提示：已成功更新您的个人信息');
    }
}

const ModifyPersonalInfoStore = new ModifyPersonalInfoData();

export default ModifyPersonalInfoStore;
