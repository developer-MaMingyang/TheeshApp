/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../utils/screen';

const styles = StyleSheet.create({
    menuItem: {
        justifyContent: 'flex-start',
        height: scaleSize(104),
        paddingLeft: scaleSize(30),
        paddingRight: scaleSize(30),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ededed',
        backgroundColor: '#fff',
    },
    menuItemIcon: {
        width: scaleSize(44),
    },
    iconArrow: {
        fontSize: scaleSize(66),
        color: '#999',
        marginLeft: 'auto',
    },
});

export default styles;
