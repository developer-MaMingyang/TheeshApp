/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Picker } from 'native-base';
import { inject, observer } from 'mobx-react';
import SyanImagePicker from 'react-native-syan-image-picker';
import { Header } from '../../../components/HeaderBar';
import publicStyles from '../../../styles/public';
import styles from './styles';
import { fz } from '../../../styles/size';
// import AvatarPlaceholder from '../../../assets/account/avatar-placeholder.png';
import { toast } from '../../../utils/utils';
import navigationUtils from '../../../utils/navigationUtils';

const { navigate } = navigationUtils;

@inject(({ AccountContainerStore, ModifyPersonalInfoStore }) => ({ AccountContainerStore, ModifyPersonalInfoStore }))
@observer
class ModifyPersonalInfo extends Component {
    state = {
        nickName: '',
        gender: '',
        description: '',
    };

    componentDidMount() {
        const { AccountContainerStore: { userInfo: { nickName, gender, description } } } = this.props;
        this.setState({ nickName, gender, description });
    }

    selectPhoto = () => {
        const { ModifyPersonalInfoStore: { setPhoto } } = this.props;
        SyanImagePicker.showImagePicker({
            imageCount: 1,
            quality: 100,
            isCrop: true,
        }, (error, selectedPhotos) => {
            if (error && error !== '取消') {
                toast(error);
            }
            setPhoto(selectedPhotos);
        });
    };

    render() {
        const { AccountContainerStore: { userInfo }, ModifyPersonalInfoStore: { doModifyInfo } } = this.props;
        return (
            <Container>
                <Header title="修改资料" />
                <Content>
                    {/* <View style={[publicStyles.flexRow, publicStyles.aliC, styles.itemWrapper]}> */}
                    {/* <View> */}
                    {/* <Text style={fz(25}>头像</Text> */}
                    {/* </View> */}
                    {/* <View style={publicStyles.fr}> */}
                    {/* <TouchableWithoutFeedback onPress={this.selectPhoto}> */}
                    {/* <Image source={userInfo.photo ? { uri: userInfo.photo } : AvatarPlaceholder} style={styles.userPhoto} /> */}
                    {/* </TouchableWithoutFeedback> */}
                    {/* </View> */}
                    {/* </View> */}
                    <View style={[publicStyles.flexRow, publicStyles.aliC, styles.itemWrapper]}>
                        <View>
                            <Text style={fz(30)}>昵称</Text>
                        </View>
                        <View style={publicStyles.fr}>
                            <TextInput
                                multiline
                                placeholder="请输入您的昵称"
                                value={this.state.nickName}
                                underlineColorAndroid="transparent"
                                onChangeText={text => this.setState({ nickName: text })}
                                style={[fz(30), styles.editor, publicStyles.c3]}
                            />
                        </View>
                    </View>
                    <View style={[publicStyles.flexRow, publicStyles.aliC, styles.itemWrapper]}>
                        <View>
                            <Text style={fz(30)}>性别</Text>
                        </View>
                        <View style={publicStyles.fr}>
                            <Picker mode="dropdown" style={[styles.pickerWrapper, publicStyles.c3, { textAlign: 'right' }, fz(30)]} selectedValue={this.state.gender} onValueChange={gender => this.setState({ gender })}>
                                <Picker.Item label="保密" value={0} />
                                <Picker.Item label="男" value={1} />
                                <Picker.Item label="女" value={2} />
                            </Picker>
                        </View>
                    </View>
                    <View style={[publicStyles.flexRow, publicStyles.aliC, styles.itemWrapper]}>
                        <View>
                            <Text style={fz(30)}>个人简介</Text>
                        </View>
                        <View style={publicStyles.fr}>
                            <TextInput
                                multiline
                                placeholder="请输入您的个人简介"
                                value={this.state.description}
                                underlineColorAndroid="transparent"
                                onChangeText={text => this.setState({ description: text })}
                                style={[fz(30), styles.editor, publicStyles.c3]}
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigate('ForgetPwd')}>
                            <View style={[publicStyles.flexRow, publicStyles.aliC, styles.itemWrapper]}>
                                <View>
                                    <Text style={fz(30)}>修改密码</Text>
                                </View>
                                <Icon style={styles.iconArrow} type="EvilIcons" name="chevron-right" />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={publicStyles.aliC}>
                        <TouchableOpacity style={[publicStyles.aliC, publicStyles.jcC, styles.doModifyBtn]} onPress={() => doModifyInfo({ nickName: this.state.nickName, gender: this.state.gender, description: this.state.description })}>
                            <View>
                                <Text style={[fz(30), publicStyles.cWhite]}>确定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ModifyPersonalInfo;
