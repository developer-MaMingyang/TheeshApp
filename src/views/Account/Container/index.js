/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content } from 'native-base';
import UserProfile from './modules/UserProfile';
import AccountContainerList from './modules/AccountContainerList';
import LogOut from './modules/LogOut';

class AccountContainer extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <UserProfile />
                    <AccountContainerList />
                    <LogOut />
                </Content>
            </Container>
        );
    }
}

export default AccountContainer;
