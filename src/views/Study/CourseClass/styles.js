/*
* author: mamingyang@baofeng.com
* date: 2019/2/19
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';

const styles = StyleSheet.create({
    classContainer: {
        paddingLeft: scaleSize(18),
        paddingRight: scaleSize(18),
    },
    classItem: {
        width: scaleSize(346),
        height: scaleSize(360),
        borderRadius: scaleSize(8),
        marginBottom: scaleSize(20),
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    classItemImg: {
        width: scaleSize(346),
        height: scaleSize(240),
        marginBottom: scaleSize(24),
    },
    classItemTitle: {
        paddingLeft: scaleSize(22),
        paddingRight: scaleSize(22),
        fontSize: scaleSize(28),
        color: '#323232',
    },
});

export default styles;
