/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import MajorCourses from './components/MajorCourses';
import HotCourses from './components/HotCourses';
import { Color } from '../../../utils/constants';

const { bgGray: backgroundColor } = Color;

class StudyContainer extends Component {
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor }}>
                    <MajorCourses />
                    <HotCourses />
                </Content>
            </Container>
        );
    }
}

export default StudyContainer;
