import React from 'react';
import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as NB from 'native-base';
import NavigationUtils from '../../utils/navigationUtils';
import styles from './style';

/**
 *基本头部，默认返回按钮和标题
 *
 * @export
 * @param {string} title 头部标题
 * @param {bool} noLeft 去掉左边按钮
 * @param {string} leftIcon 定义左边按钮icon样式
 * @param {string} iconType 定义左边按钮icon类型
 * @param {string} backTarget 改变导航返回的目标页面路由
 * @param {bool} noborder 是否含有下边框
 * @returns
 */
function HeaderView(props) {
    const { title, noLeft, leftIcon = 'arrow-left', iconType = 'SimpleLineIcons', noborder, navigation, backTarget } = props;
    return (
        <NB.Header style={[styles.header, noborder && styles.headerNoborder]}>
            <StatusBar backgroundColor="transparent" />
            <NB.Left style={styles.headerLeft}>
                {
                    !noLeft && (
                        <NB.Button transparent onPress={() => (backTarget ? navigation.navigate(backTarget) : navigation.pop())}>
                            <NB.Icon type={iconType} ios={leftIcon} android={leftIcon} style={styles.headerLeftMin} />
                        </NB.Button>
                    )
                }
            </NB.Left>
            <NB.Body style={styles.headerBody}>
                <NB.Title style={styles.title}>{ title }</NB.Title>
            </NB.Body>
            <NB.Right />
        </NB.Header>
    );
}

export const Header = withNavigation(HeaderView);

/**
 *带右边按钮的头部
 *默认为文字按钮，如配置icon按钮则设置相关属性
 * @export
 * @param {string} title 头部标题
 * @param {string} leftIcon 定义左边按钮icon样式
 * @param {string} rightIcon 定义右边按钮icon样式
 * @param {string} rightText 定义右边按钮文字
 * @param {fn} rightOnPress 定义右边按钮文字
 * @returns
 */
export function HeaderWithRight(props) {
    const { title, leftIcon = 'arrow-back', rightIcon, rightText, rightOnPress } = props;
    return (
        <NB.Header style={styles.header}>
            <NB.Left>
                <NB.Button transparent onPress={() => NavigationUtils.navigate('Home')}>
                    <NB.Icon name={leftIcon} style={styles.headerLeftMin} />
                </NB.Button>
            </NB.Left>
            <NB.Body>
                <NB.Title style={styles.title}>{ title }</NB.Title>
            </NB.Body>
            <NB.Right>
                <NB.Button transparent onPress={() => rightOnPress()}>
                    {
                        rightIcon
                            ? <NB.Icon name={rightIcon} />
                            : <NB.Text style={styles.headerRightText}>{rightText}</NB.Text>
                    }
                </NB.Button>
            </NB.Right>
        </NB.Header>
    );
}
