/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../styles';
import AvatarPlaceholder from '../../../../assets/account/avatar-placeholder.png';
import navigationUtils from '../../../../utils/navigationUtils';
import publicStyles from '../../../../styles/public';

const { navigate } = navigationUtils;

@inject(({ AccountContainerStore }) => ({ AccountContainerStore }))
@observer
class UserProfile extends Component {
    doLogin = () => {
        const { AccountContainerStore } = this.props;
        if (!AccountContainerStore.userInfo.userAcc) {
            navigate('Login');
        }
    };

    render() {
        const { AccountContainerStore } = this.props;
        return (
            <View style={styles.avatarBox}>
                <TouchableWithoutFeedback onPress={this.doLogin}>
                    <View style={publicStyles.aliC}>
                        <Image source={AvatarPlaceholder} style={styles.avatarImg} />
                        <Text style={styles.avatarText}>{AccountContainerStore.userInfo.userAcc ? `您好，${AccountContainerStore.userInfo.userAcc}` : '未登录'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default UserProfile;
