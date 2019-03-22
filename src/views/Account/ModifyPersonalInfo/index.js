/*
* author: mamingyang@baofeng.com
* date: 2019/3/22
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { Header } from '../../../components/HeaderBar';

@inject(({ ModifyPersonalInfoStore }) => ({ ModifyPersonalInfoStore }))
@observer
class ModifyPersonalInfo extends Component {
    render() {
        return (
            <Container>
                <Header title="修改资料" />
                <Content>
                    <View>
                        <Text>TODO：修改资料页面</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ModifyPersonalInfo;
