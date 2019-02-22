/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import publicStyles from '../../../../styles/public';
import styles from '../styles';
import { fz } from '../../../../styles/size';

@inject(({ AccountContainerStore }) => ({ AccountContainerStore }))
@observer
class LogOut extends Component {
    render() {
        const { AccountContainerStore } = this.props;
        const { logOut } = AccountContainerStore;
        if (AccountContainerStore.userInfo.userAcc) {
            return (
                <View style={publicStyles.aliC}>
                    <TouchableOpacity style={[publicStyles.aliC, publicStyles.jcC, styles.logOutBtn]} onPress={logOut}>
                        <View>
                            <Text style={[fz(30), publicStyles.cWhite]}>退出登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    }
}

export default LogOut;
