/*
* author: mamingyang@baofeng.com
* date: 2019/3/11
*/

import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../utils/screen';

const styles = StyleSheet.create({
    videoWrapper: {
        width: deviceWidth,
        height: deviceWidth / 48 * 27,
    },
});

export default styles;
