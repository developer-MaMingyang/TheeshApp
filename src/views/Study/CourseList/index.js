/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import React, { Component } from 'react';
import { WebView, StatusBar } from 'react-native';
import { Container } from 'native-base';
import { inject, observer } from 'mobx-react';
import Orientation from 'react-native-orientation';
import { Header } from '../../../components/HeaderBar';

@inject(({ CourseListStore }) => ({ CourseListStore }))
@observer
class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullScreen: false,
        };
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
        StatusBar.setHidden(false);
    }

    handleMessage(event) {
        switch (event.nativeEvent.data) {
        case 'full-screen':
            this.setState({ isFullScreen: true });
            StatusBar.setHidden(true);
            Orientation.lockToLandscape();
            break;
        case 'cancel-full-screen':
            this.setState({ isFullScreen: false });
            StatusBar.setHidden(false);
            Orientation.lockToPortrait();
            break;
        default:
        }
    }

    render() {
        const { navigation: { state: { params: { title, id: courseId } } } } = this.props;
        return (
            <Container>
                {!this.state.isFullScreen && (<Header title={title} />)}
                <WebView
                    source={{ uri: `http://www.theesh.com/h5/course/list/${courseId}?source=app` }}
                    onMessage={this.handleMessage.bind(this)}
                />
            </Container>
        );
    }
}

export default CourseList;
