/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../styles';
import AvatarPlaceholder from '../../../../assets/account/avatar-placeholder.png';

@inject(({ AccountContainer }) => ({ AccountContainer }))
@observer
class UserProfile extends Component {
    render() {
        return (
            <View style={styles.avatarBox}>
                <Image source={AvatarPlaceholder} style={styles.avatarImg} />
                <Text style={styles.avatarText}>未登录</Text>
            </View>
        );
    }
}

export default UserProfile;
