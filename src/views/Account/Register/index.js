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
import { fz, mb, mr } from '../../../styles/size';

const { pop } = navigationUtils;

@inject(({ AccountContainerStore, RegisterStore }) => ({ AccountContainerStore, RegisterStore }))
@observer
class Register extends Component {
    componentWillUnmount() {
        const { RegisterStore: { reset } } = this.props;
        reset();
    }

    doRegister = async () => {
        const { AccountContainerStore: { initUserInfo }, RegisterStore: { register, userAcc } } = this.props;
        if (await register()) {
            initUserInfo(userAcc);
            pop();
        }
    };

    render() {
        const { RegisterStore: { userAcc, msgVc, msgLeftTime, getMsgVc, userPwd, setData } } = this.props;
        return (
            <Container>
                <Header title="注册" />
                <Content>
                    <View style={styles.registerWrapper}>
                        <View style={mb(25)}>
                            <Text style={[fz(28), mb(15)]}>手机号</Text>
                            <Item regular>
                                <Input keyboardType="numeric" onChangeText={val => setData('userAcc', val)} value={userAcc} placeholder="请输入您的手机号" />
                            </Item>
                        </View>
                        <View style={mb(25)}>
                            <Text style={[fz(28), mb(15)]}>短信验证码</Text>
                            <Item regular>
                                <Input keyboardType="numeric" onChangeText={val => setData('msgVc', val)} value={msgVc} placeholder="请输入短信验证码" />
                                <TouchableOpacity style={mr(20)} disabled={msgLeftTime >= 0} onPress={getMsgVc}>
                                    {msgLeftTime < 0 ? (
                                        <Text style={[publicStyles.cBlue, fz(28)]}>获取验证码</Text>
                                    ) : (
                                        <Text style={[publicStyles.cGray, fz(28)]}>重新获取({msgLeftTime})</Text>
                                    )}
                                </TouchableOpacity>
                            </Item>
                        </View>
                        <View style={mb(35)}>
                            <Text style={[fz(28), mb(15)]}>密码</Text>
                            <Item regular>
                                <Input onChangeText={val => setData('userPwd', val)} secureTextEntry value={userPwd} placeholder="6-16位字母，数字或英文符号组合" />
                            </Item>
                        </View>
                        <View style={[publicStyles.aliC, mb(40)]}>
                            <TouchableOpacity style={[publicStyles.aliC, publicStyles.jcC, styles.registerBtnWrapper]} onPress={this.doRegister}>
                                <Text style={[publicStyles.cWhite, fz(30)]}>立即注册</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={publicStyles.aliC}>
                            <View style={publicStyles.flexRow}>
                                <Text style={[fz(25)]}>已有账号？</Text>
                                <TouchableOpacity onPress={() => pop()}>
                                    <Text style={[fz(25), publicStyles.cBlue]}>立即登录</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Register;
