import { StyleSheet, Platform } from 'react-native';
import { setText, scaleSize} from '../../utils/screen';

const styles = StyleSheet.create({
    none: {
        display: 'none',
    },
    divideLine: {
        height: scaleSize(26),
        width: 1,
        backgroundColor: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleSize(10),
        marginLeft: scaleSize(10),
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogWrap: {
        backgroundColor: '#fff',
        width: scaleSize(650),
        minHeight: scaleSize(200),
        // height: 'auto',
        borderRadius: 4,
        paddingLeft: scaleSize(30),
        paddingRight: scaleSize(30),
        paddingTop: scaleSize(30),
        alignItems: 'center',
    },

    // titleWrap: {
    //     width: scaleSize(450),
    //     height: scaleSize(50),
    //     marginTop: scaleSize(50),
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // backgroundColor: 'rgba(0,0,0,0.3)',
    // },
    // titleItem: {
    //     // flex: 1,
    //     width: scaleSize(200),
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingLeft: scaleSize(14),
    //     paddingRight: scaleSize(14),
    // },
    titleText: {
        textAlign: 'center',
        fontSize: scaleSize(34),
        lineHeight: scaleSize(44),
        color: '#333',
    },
    contentWrap: {
        marginTop: scaleSize(30),
    },
    contentText: {
        fontSize: scaleSize(32),
        marginBottom: scaleSize(10),
        color: '#333',
    },
    subContentText: {
        marginTop: scaleSize(38),
        fontSize: scaleSize(28),
        color: '#999',
    },
    imgWrap: {
        marginTop: scaleSize(30),
        marginBottom: scaleSize(30),
        alignItems: 'center',
        justifyContent: 'center',
        // height: scaleSize(10),
    },
    dialogImg: {
       
    },
    // titleImg: {
    //     height: scaleSize(45),
    //     width: scaleSize(200),
    // },
    // contentWrap: {
    //     marginTop: scaleSize(46),
    //     marginBottom: scaleSize(36),
    // },
    // contentText: {
    //     textAlign: 'center',
    //     fontSize: scaleSize(32),
    //     color: '#333',
    //     lineHeight: scaleSize(44),
    // },
    btnWrap: {
        width: '100%',
        marginTop: scaleSize(50),
        borderTopColor: '#E0DDDD',
        borderTopWidth: 1,
        flexDirection: 'row',
    },
    btn: {
        height: scaleSize(110),
        flex: 1,
        // backgroundColor: '#999',
        justifyContent: 'center',
        borderWidth: 0,
        borderRadius: 0,
    },
    btnText: {
        textAlign: 'center',
        color: '#CFA75E',
        fontSize: scaleSize(34),
        fontWeight: '700',
    },
    borderRight: {
        borderColor: '#d8d8d8',
        borderRightWidth: 1,
    },
});

export default styles;
