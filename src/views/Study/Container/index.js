/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import MajorCourses from './modules/MajorCourses';
import HotCourses from './modules/HotCourses';
import { Color } from '../../../utils/constants';

const { bgGray: backgroundColor } = Color;

@inject(({ HotCoursesStore, MajorCoursesStore }) => ({ HotCoursesStore, MajorCoursesStore }))
@observer
class StudyContainer extends Component {
    state = {
        refreshing: false,
    };

    render() {
        const { HotCoursesStore: { initHotCourses }, MajorCoursesStore: { initMajorCourses } } = this.props;
        return (
            <Container>
                <Content
                    style={{ backgroundColor }}
                    refreshControl={(
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={async () => {
                                await initMajorCourses();
                                await initHotCourses();
                                this.setState({ refreshing: false });
                            }}
                        />
                    )}
                >
                    <MajorCourses />
                    <HotCourses />
                </Content>
            </Container>
        );
    }
}

export default StudyContainer;
