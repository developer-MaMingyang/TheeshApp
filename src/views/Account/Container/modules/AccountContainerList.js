/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import MenuItem from '../../../../components/MenuItem/index';

class AccountContainerList extends Component {
    render() {
        return (
            <View>
                <MenuItem isFirst>评价应用</MenuItem>
                <MenuItem noArrow>APP更新</MenuItem>
            </View>
        );
    }
}

export default AccountContainerList;