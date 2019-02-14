/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';

const styles = StyleSheet.create({
    // 课程大类
    majorContainer: {
        paddingTop: scaleSize(65),
        marginBottom: scaleSize(56),
    },
    majorCover: {
        width: scaleSize(108),
        height: scaleSize(108),
    },
    majorText: {
        fontSize: scaleSize(26),
        color: '#000000',
        opacity: 0.7,
    },
    // 课程大类结束
    // 课程列表
    hotContainer: {
        paddingLeft: scaleSize(18),
        paddingRight: scaleSize(18),
    },
    hotTitleWrapper: {
        marginBottom: scaleSize(20),
    },
    hotTitle: {
        fontSize: scaleSize(36),
        color: '#000000',
        opacity: 0.8,
    },
    hotItem: {
        width: scaleSize(346),
        height: scaleSize(360),
        borderRadius: scaleSize(8),
        marginBottom: scaleSize(20),
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    hotItemImg: {
        width: scaleSize(346),
        height: scaleSize(240),
        marginBottom: scaleSize(24),
    },
    hotItemTitle: {
        paddingLeft: scaleSize(22),
        paddingRight: scaleSize(22),
        fontSize: scaleSize(28),
        color: '#323232',
    },
    // 课程列表结束
});

export default styles;
