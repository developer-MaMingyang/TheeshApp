/*
* author: mamingyang@baofeng.com
* date: 2019/2/21
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';
import publicStyles from '../../styles/public';
import styles from './styles';
import { fz } from '../../styles/font';

class MenuItem extends Component {
    render() {
        const { children, isFirst, onPress, disabled, noArrow, icon, iconWidth, iconHeight } = this.props;
        return (
            <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
                <View style={[publicStyles.flexRow, publicStyles.aliC, styles.menuItem, (isFirst ? {} : { borderTopWidth: 0 })]}>
                    { icon && <Image source={icon} style={[styles.menuItemIcon, (iconWidth ? { width: iconWidth } : {}), (iconHeight ? { height: iconHeight } : {})]} /> }
                    <Text style={fz(30)}>{children}</Text>
                    { (!disabled && !noArrow) && <Icon style={styles.iconArrow} type="EvilIcons" name="chevron-right" /> }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default MenuItem;