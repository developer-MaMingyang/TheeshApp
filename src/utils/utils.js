/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import Toast from 'react-native-root-toast';
import navigationUtils from './navigationUtils';

export const toast = (text) => {
    Toast.show(text, {
        duration: 3000,
        position: Toast.positions.CENTER,
        shadow: false,
        animation: true,
        hideOnPress: true,
        backgroundColor: 'rgba(0,0,0,0.5)',
        delay: 0,
    });
};

export const checkErrorCode = ({ code, message: text }) => {
    if (code === 3) {
        navigationUtils.navigate('Login');
    }
    if (code) {
        toast(text);
        return false;
    }
    return true;
};