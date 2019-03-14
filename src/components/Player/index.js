/*
* author: mamingyang@baofeng.com
* date: 2019/3/11
*/

import React, { Component } from 'react';
import { StatusBar, View, WebView } from 'react-native';
import { inject, observer } from 'mobx-react';
import { deviceHeight, deviceWidth } from '../../utils/screen';
import styles from './styles';

@inject(({ PlayerStore }) => ({ PlayerStore }))
@observer
class Player extends Component {
    constructor(props) {
        super(props);
        this.webView = '';
    }

    componentWillUnmount() {
        const { PlayerStore: { toggleFullScreen } } = this.props;
        toggleFullScreen(false);
        StatusBar.setHidden(false);
    }

    handleMessage = (event) => {
        const { PlayerStore: { toggleFullScreen } } = this.props;
        console.log(event.nativeEvent.data);
        switch (event.nativeEvent.data) {
        case 'play':
            toggleFullScreen(false);
            // this.refs.webView.postMessage({
            //     width: deviceWidth,
            // });
            break;
        case 'pause':
            toggleFullScreen(true);
            StatusBar.setHidden(true);
            // this.refs.webView.postMessage({
            //     width: deviceHeight,
            //     height: deviceWidth,
            // });
            break;
        default:
        }
    };

    render() {
        const { playAuth, coverUrl, videoId, PlayerStore: { isFullScreen } } = this.props;
        if (!playAuth || !videoId) {
            console.warn('Player: 缺少必要参数playAuth或videoId');
            return (
                <View />
            );
        }
        console.log(`http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}&deviceWidth=${deviceWidth}`);
        return (
            <View>
                <WebView
                    ref={webView => this.webView = webView}
                    source={{ uri: `http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}&deviceWidth=${deviceWidth}` }}
                    style={isFullScreen ? {
                        width: deviceHeight,
                        height: deviceWidth,
                    } : styles.videoWrapper}
                    onMessage={this.handleMessage}
                />
            </View>
        );
    }
}

export default Player;
