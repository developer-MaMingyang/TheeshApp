/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../utils/screen';
import { fz } from '../../../styles/font';

const styles = StyleSheet.create({
    courseItem: {
        height: scaleSize(80),
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    courseItemText: {
        ...fz(25),
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
    }
});

export default styles;
