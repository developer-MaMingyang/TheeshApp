/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';

const styles = StyleSheet.create({
    registerWrapper: {
        paddingTop: scaleSize(30),
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
    },
    registerBtnWrapper: {
        width: '90%',
        height: scaleSize(80),
        borderRadius: scaleSize(6),
        backgroundColor: '#409eff',
    },
});

export default styles;
