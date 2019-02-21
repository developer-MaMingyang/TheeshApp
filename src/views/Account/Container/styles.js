/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';

const styles = StyleSheet.create({
    avatarBox: {
        width: '100%',
        height: scaleSize(380),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1BF80',
        marginBottom: scaleSize(20),
    },
    avatarImg: {
        width: scaleSize(140),
        height: scaleSize(140),
    },
    avatarText: {
        color: '#fff',
        fontSize: scaleSize(32),
        marginTop: scaleSize(20),
        fontWeight: '500',
    },
    logOutBtn: {
        width: '80%',
        height: scaleSize(80),
        borderRadius: scaleSize(6),
        backgroundColor: '#E1BF80',
        marginTop: scaleSize(50),
    },
});

export default styles;
