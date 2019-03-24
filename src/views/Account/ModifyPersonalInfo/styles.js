/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';

const styles = StyleSheet.create({
    itemWrapper: {
        height: scaleSize(104),
        paddingLeft: scaleSize(30),
        paddingRight: scaleSize(30),
        borderBottomWidth: scaleSize(1),
        borderColor: '#ededed',
    },
    userPhoto: {
        width: scaleSize(80),
        height: scaleSize(80),
    },
    editor: {
        width: scaleSize(300),
        textAlign: 'right',
    },
    menuItemIcon: {
        width: scaleSize(44),
    },
    iconArrow: {
        fontSize: scaleSize(66),
        color: '#999',
        marginLeft: 'auto',
    },
    doModifyBtn: {
        width: '80%',
        height: scaleSize(80),
        borderRadius: scaleSize(6),
        backgroundColor: '#409eff',
        marginTop: scaleSize(50),
    },
});

export default styles;
