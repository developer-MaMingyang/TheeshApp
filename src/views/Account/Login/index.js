/*
* author: mamingyang@baofeng.com
* date: 2019/2/22
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Item, Input } from 'native-base';
import { inject, observer } from 'mobx-react';
import navigationUtils from '../../../utils/navigationUtils';
import { Header } from '../../../components/HeaderBar';
import publicStyles from '../../../styles/public';
import styles from './styles';
import { fz, mb } from '../../../styles/size';

const { pop, navigate } = navigationUtils;

@inject(({ AccountContainerStore, LoginStore }) => ({ AccountContainerStore, LoginStore }))
@observer
class Login extends Component {
    componentWillUnmount() {
        const { LoginStore: { reset } } = this.props;
        reset();
    }

    doLogin = async () => {
        const { AccountContainerStore: { initUserInfo }, LoginStore: { login, userAcc } } = this.props;
        if (await login()) {
            initUserInfo(userAcc);
            pop();
        }
    };

    render() {
        const { LoginStore: { userAcc, userPwd, setData } } = this.props;
        return (
            <Container>
                <Header title="登录" />
                <Content>
                    <View style={styles.loginWrapper}>
                        <View style={mb(25)}>
                            <Text style={[fz(28), mb(15)]}>手机号</Text>
                            <Item regular>
                                <Input keyboardType="numeric" onChangeText={val => setData('userAcc', val)} value={userAcc} placeholder="请输入您的手机号" />
                            </Item>
                        </View>
                        <View style={mb(35)}>
                            <Text style={[fz(28), mb(15)]}>密码</Text>
                            <Item regular>
                                <Input onChangeText={val => setData('userPwd', val)} secureTextEntry value={userPwd} placeholder="请输入您的密码" />
                            </Item>
                        </View>
                        <View style={[publicStyles.aliC, mb(40)]}>
                            <TouchableOpacity style={[publicStyles.aliC, publicStyles.jcC, styles.loginBtnWrapper]} onPress={this.doLogin}>
                                <Text style={[publicStyles.cWhite, fz(30)]}>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={publicStyles.aliC}>
                            <View style={publicStyles.flexRow}>
                                <Text style={[fz(25)]}>没有账号？</Text>
                                <TouchableOpacity onPress={() => navigate('Register')}>
                                    <Text style={[fz(25), publicStyles.cBlue]}>立即注册</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Login;
