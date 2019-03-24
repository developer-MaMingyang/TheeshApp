/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import { inject, observer } from 'mobx-react';
import MenuItem from '../../../../components/MenuItem/index';
import navigationUtils from '../../../../utils/navigationUtils';

const { navigate } = navigationUtils;

@inject(({ AccountContainerStore }) => ({ AccountContainerStore }))
@observer
class AccountContainerList extends Component {
    render() {
        const { AccountContainerStore: { userInfo } } = this.props;
        return (
            <View>
                {
                    userInfo.phone ? (
                        <MenuItem isFirst onPress={() => navigate('ModifyPersonalInfo')}>修改资料</MenuItem>
                    ) : null
                }
                {/* <MenuItem isFirst>评价应用</MenuItem> */}
                {/* <MenuItem noArrow>APP更新</MenuItem> */}
            </View>
        );
    }
}

export default AccountContainerList;