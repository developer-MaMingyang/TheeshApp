/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import screens from './views';
import { scaleSize } from './utils/screen';
import IconStudyActive from './assets/public/study-active.png';
import IconStudy from './assets/public/study.png';
import IconAccountActive from './assets/public/account-active.png';
import IconAccount from './assets/public/account.png';

const AppStack = createBottomTabNavigator({
    Study: {
        screen: screens.StudyContainer,
        navigationOptions: () => ({
            tabBarLabel: '学习',
            tabBarIcon: ({ focused }) => {
                const source = focused ? IconStudyActive : IconStudy;
                return <Image source={source} />;
            },
        }),
    },
    Account: {
        screen: screens.AccountContainer,
        navigationOptions: () => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ focused }) => {
                const source = focused ? IconAccountActive : IconAccount;
                return <Image source={source} />;
            },
        }),
    },
}, {
    initialRouteName: 'Study',
    tabBarOptions: {
        activeTintColor: '#3c3e40',
        inactiveTintColor: '#909499',
        style: {
            padding: scaleSize(6),
            height: scaleSize(100),
            borderTopColor: '#e5e5e5',
            borderTopWidth: 0,
        },
        labelStyle: {
            fontSize: scaleSize(25),
        },
        showIcon: true,
    },
});

const MainStack = createStackNavigator({
    Study: {
        screen: AppStack,
        path: 'app/study',
    },
    Account: {
        screen: AppStack,
        path: 'app/account',
    },
    CourseList: screens.CourseList,
    CourseClass: screens.CourseClass,
    Login: screens.Login,
    Register: screens.Register,
}, {
    headerMode: 'none',
});

const AppNavigator = createStackNavigator(
    {
        Main: MainStack,
    },
    {
        headerMode: 'none',
        mode: 'modal',
    },
);

export default createAppContainer(AppNavigator);
