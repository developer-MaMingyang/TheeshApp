// Navigation工具类
// 在没有navigation这个prop的情况下进行页面跳转
// 参考：https://reactnavigation.org/docs/zh-Hans/navigating-without-navigation-prop.html

import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}

// 重置路由为顶部再跳转至目标页面
function reset(routeName, params, root) {
    let rootPath = 'App';
    const type = typeof params === 'number' ? params : root;
    switch (type) {
    case 1:
        rootPath = 'Product';
        break;
    case 2:
        rootPath = 'Account';
        break;
    default:
        rootPath = 'App';
        break;
    }
    navigator.dispatch(StackActions.reset({
        index: 1,
        actions: [
            NavigationActions.navigate({
                routeName: rootPath,
            }),
            NavigationActions.navigate({
                routeName,
                params,
            }),
        ],
    }));
}

/**
 *返回到堆栈n个路由
 *
 * @param {Number} n 返回的层级
 */
function pop(n) {
    navigator.dispatch(StackActions.pop({
        n,
    }));
}

// 返回值堆栈顶层
function popToPop() {
    navigator.dispatch(StackActions.popToTop());
}

// 替换路由
function replace(routeName, params) {
    navigator.dispatch(StackActions.replace({ routeName, params }));
}


// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    reset,
    pop,
    popToPop,
    replace,
};