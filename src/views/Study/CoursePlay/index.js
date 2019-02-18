/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

// TODO 待补充

import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, WebView } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { Header } from '../../../components/HeaderBar';
import { deviceWidth } from '../../../utils/screen';
import publicStyles from '../../../styles/public';
import styles from './styles';

@inject(({ CoursePlayStore }) => ({ CoursePlayStore }))
@observer
class CoursePlay extends Component {
    componentDidMount() {
        const { CoursePlayStore: { initAuth }, navigation: { state: { params: { videoId } } } } = this.props;
        initAuth(videoId);
    }

    componentWillUnmount() {
        const { CoursePlayStore: { reset } } = this.props;
        reset();
    }

    render() {
        const { CoursePlayStore: { playAuth }, navigation: { state: { params: { lessonName, coverUrl, videoId } } } } = this.props;
        console.log(playAuth);
        const source = require('../../../components/Player/index.html');
        console.log(`http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}&deviceWidth=${deviceWidth}`);
        return (
            <Container>
                <Header title={lessonName}/>
                {playAuth ? (
                    <WebView
                        source={{ uri: `http://192.168.131.2/video.html?playAuth=${playAuth}&coverUrl=${coverUrl}&videoId=${videoId}` }}
                        style={{ width: '100%', height: 1000 }}
                    />
                ) : (
                    <View/>
                )}
            </Container>
        );
    }
}

export default CoursePlay;
