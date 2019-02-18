/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import { StyleSheet } from 'react-native';
import {scaleSize} from '../utils/screen';

const publicStyles = StyleSheet.create({
    // 排版
    f1: { flex: 1 },
    flexRow: { flexDirection: 'row' },
    flexWrap: { flexWrap: 'wrap' },
    // 排版结束
    // 位置
    aliC: { alignItems: 'center' },
    jcC: { justifyContent: 'center' },
    jcSb: { justifyContent: 'space-between' },
    // 位置结束

    // margin
    mt20: { marginTop: scaleSize(20) },
    mb24: { marginBottom: scaleSize(24) },
    mb20: { marginBottom: scaleSize(20) },
    mr20: { marginRight: scaleSize(20) },
    // margin结束

    // 背景颜色
    bgWhite: { backgroundColor: '#ffffff' },
    // 背景颜色结束

    // 字体位置
    taC: { textAlign: 'center' },
    // 字体位置结束

    // 字体颜色

    // 字体颜色结束
});

export default publicStyles;
