/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import MenuItem from '../../../../components/MenuItem/index';
import navigationUtils from '../../../../utils/navigationUtils';

const { navigate } = navigationUtils;

class AccountContainerList extends Component {
    render() {
        return (
            <View>
                <MenuItem isFirst onPress={() => navigate('ModifyPersonalInfo')}>修改资料</MenuItem>
                {/* <MenuItem isFirst>评价应用</MenuItem> */}
                {/* <MenuItem noArrow>APP更新</MenuItem> */}
            </View>
        );
    }
}

export default AccountContainerList;