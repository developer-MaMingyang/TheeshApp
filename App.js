import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { Root, StyleProvider } from 'native-base';
import navigationUtils from './src/utils/navigationUtils';
import AppNavigator from './src/router';
import store from './src/stores';

import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

const { setTopLevelNavigator } = navigationUtils;

export default class App extends Component {
    render() {
        return (
            <Provider {...store}>
                <Root>
                    <StyleProvider style={getTheme(commonColor)}>
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