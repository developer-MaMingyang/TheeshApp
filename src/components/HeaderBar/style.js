import { StyleSheet, Platform } from 'react-native';
import { scaleSize } from '../../utils/screen';

const styles = StyleSheet.create({
    none: {
        display: 'none',
    },
    header: {
        backgroundColor: '#fff',
        borderBottomColor: '#ededed',
        height: scaleSize(148),
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
            android: {
                borderBottomWidth: 1,
                elevation: 0,
                paddingTop: scaleSize(30),
            },
        }),
    },
    headerNoborder: {
        borderBottomWidth: 0,
    },
    headerLeft: {
        color: '#999',
        fontSize: 42,
        // marginLeft: 12,
        // backgroundColor: '#888',
    },
    headerLeftMin: {
        color: '#999',
        fontSize: 15,
        ...Platform.select({
            ios: {
                marginLeft: scaleSize(20),
            },
            android: {
                marginLeft: scaleSize(10),
            },
        }),
    },
    headerBody: {
        // backgroundColor: '#888',
    },
    headerRight: {
        color: '#4a8bf8',
        fontSize: 15,
        marginTop: 10,
        // backgroundColor: 'red',
    },
    headerRightText: {
        color: '#4a8bf8',
        fontSize: 17,
        // marginTop: 10,
    },
    title: {
        color: '#333',
        fontSize: scaleSize(32),
        fontWeight: '400',
    },
});

export default styles;
