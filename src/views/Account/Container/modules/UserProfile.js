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
    componentWillMount() {
        const { AccountContainerStore: { initUserInfo } } = this.props;
        initUserInfo();
    }

    componentWillUnmount() {
        const { AccountContainerStore: { reset } } = this.props;
        reset();
    }

    doLogin = () => {
        const { AccountContainerStore: { userInfo } } = this.props;
        if (!userInfo.phone) {
            navigate('Login');
        }
    };

    render() {
        const { AccountContainerStore: { userInfo, loaded } } = this.props;
        return (
            <View style={styles.avatarBox}>
                {
                    loaded ? (
                        <TouchableWithoutFeedback onPress={this.doLogin}>
                            {
                                userInfo.phone ? (
                                    <View style={publicStyles.aliC}>
                                        <Image source={AvatarPlaceholder} style={styles.avatarImg} />
                                        <Text style={styles.avatarText}>您好，{userInfo.nickName || userInfo.phone}</Text>
                                    </View>
                                ) : (
                                    <View style={publicStyles.aliC}>
                                        <Image source={AvatarPlaceholder} style={styles.avatarImg} />
                                        <Text style={styles.avatarText}>未登录</Text>
                                    </View>
                                )
                            }
                        </TouchableWithoutFeedback>
                    ) : null
                }
            </View>
        );
    }
}

export default UserProfile;
