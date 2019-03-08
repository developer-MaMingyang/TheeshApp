/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

// TODO 待补充

import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, WebView, ActivityIndicator, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { Header } from '../../../components/HeaderBar';
import { deviceHeight, deviceWidth } from '../../../utils/screen';
import publicStyles from '../../../styles/public';
import styles from './styles';
import { fz } from '../../../styles/size';

@inject(({ CoursePlayStore }) => ({ CoursePlayStore }))
@observer
class CoursePlay extends Component {
    state = {
        isFullScreen: false,
    };

    componentDidMount() {
        const { CoursePlayStore: { initAuth }, navigation: { state: { params: { videoId } } } } = this.props;
        initAuth(videoId);
    }

    componentWillUnmount() {
        const { CoursePlayStore: { reset } } = this.props;
        reset();
    }

    handleMessage = (event) => {
        console.log(event.nativeEvent.data);
        switch (event.nativeEvent.data) {
        case 'play':
            this.setState({
                isFullScreen: false,
            });
            // this.refs.webView.postMessage({
            //     width: deviceWidth,
            // });
            break;
        case 'pause':
            this.setState({
                isFullScreen: true,
            });
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
        const { CoursePlayStore: { playAuth }, navigation: { state: { params: { lessonName, coverUrl, videoId } } } } = this.props;
        console.log(deviceWidth);
        console.log(deviceWidth / 48 * 27);
        console.log(`http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}&deviceWidth=${deviceHeight}&deviceHeight=${deviceWidth}`);
        return (
            <Container>

                {!this.state.isFullScreen && (<Header title={lessonName} />)}
                <Content>
                    {playAuth ? (
                        <WebView
                            ref={webView => this.webView = webView}
                            source={{ uri: `http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}&deviceWidth=${deviceWidth}` }}
                            style={this.state.isFullScreen ? { width: deviceHeight, height: deviceWidth } : styles.videoWrapper}
                            onMessage={this.handleMessage}
                        />
                    ) : (
                        <View style={[publicStyles.aliC, publicStyles.jcC, styles.videoWrapper]}>
                            <ActivityIndicator />
                            <Text style={fz(25)}>加载中。。。</Text>
                        </View>
                    )}
                    <Text style={fz(30)}>aaaaa</Text>
                    <Text style={fz(30)}>aaaaa</Text>
                    <Text style={fz(30)}>aaaaa</Text>
                    <Text style={fz(30)}>aaaaa</Text>
                    <Text style={fz(30)}>aaaaa</Text>
                </Content>
            </Container>
        );
    }
}

export default CoursePlay;
