/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

import { StyleSheet } from 'react-native';
import { deviceWidth, scaleSize } from '../../../utils/screen';
import { fz } from '../../../styles/size';

const styles = StyleSheet.create({
    coursePhoto: {
        width: deviceWidth,
        height: deviceWidth / 1.5,
    },
    videoWrapper: {
        width: deviceWidth,
        height: deviceWidth / 48 * 27,
    },
    courseItem: {
        height: scaleSize(80),
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    courseItemText: {
        ...fz(25),
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
    },
});

export default styles;
