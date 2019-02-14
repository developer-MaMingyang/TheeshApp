import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { Root, StyleProvider } from 'native-base';
import navigationUtils from './src/utils/navigationUtils';
import AppNavigator from './src/router';
import store from './src/stores';

const { setTopLevelNavigator } = navigationUtils;

export default class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <Root>
                    <StyleProvider>
                        <View style={{ flex: 1 }}>
                            <AppNavigator ref={(navigatorRef) => {
                                setTopLevelNavigator(navigatorRef);
                            }}
                            />
                        </View>
                    </StyleProvider>
                </Root>
            </Provider>
        );
    }
}