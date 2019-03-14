/*
* author: mamingyang@baofeng.com
* date: 2019/3/13
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Input, Item } from 'native-base';
import { inject, observer } from 'mobx-react';
import { Header } from '../../../components/HeaderBar';
import navigationUtils from '../../../utils/navigationUtils';
import publicStyles from '../../../styles/public';
import styles from './styles';
import { fz, mb, mr } from '../../../styles/size';

const { pop } = navigationUtils;

@inject(({ ForgetPwdStore }) => ({ ForgetPwdStore }))
@observer
class ForgetPwd extends Component {
    doModify = async () => {
        const { AccountContainerStore: { initUserInfo }, ForgetPwdStore: { modifyPwd, userAcc } } = this.props;
        if (await modifyPwd()) {
            initUserInfo(userAcc);
            pop();
        }
    };

    render() {
        const { ForgetPwdStore: { userAcc, msgVc, msgLeftTime, getMsgVc, newPwd, setData } } = this.props;
        return (
            <Container>
                <Header title="忘记密码" />
                <Content>
                    <View style={styles.forgetPwdWrapper}>
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
                            <Text style={[fz(28), mb(15)]}>新密码</Text>
                            <Item regular>
                                <Input onChangeText={val => setData('newPwd', val)} secureTextEntry value={newPwd} placeholder="6-16位字母，数字或英文符号组合" />
                            </Item>
                        </View>
                        <View style={[publicStyles.aliC, mb(40)]}>
                            <TouchableOpacity style={[publicStyles.aliC, publicStyles.jcC, styles.forgetPwdBtnWrapper]} onPress={this.doModify}>
                                <Text style={[publicStyles.cWhite, fz(30)]}>立即修改</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ForgetPwd;
