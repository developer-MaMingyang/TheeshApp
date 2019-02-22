/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import navigationUtils from '../../../utils/navigationUtils';
import { Header } from '../../../components/HeaderBar';
import publicStyles from '../../../styles/public';
import styles from './styles';
import { fz } from '../../../styles/size';

const { navigate } = navigationUtils;

@inject(({ CourseListStore }) => ({ CourseListStore }))
@observer
class CourseList extends Component {
    componentDidMount() {
        const { CourseListStore: { initCourseList }, navigation: { state: { params: { id: courseId } } } } = this.props;
        initCourseList(courseId);
    }

    componentWillUnmount() {
        const { CourseListStore: { reset } } = this.props;
        reset();
    }

    initList = () => {
        const { CourseListStore: { data: { lessons: originList }, loading, refreshing, initCourseList }, navigation: { state: { params: { id: courseId } } } } = this.props;
        let list;
        if (typeof originList === 'object') {
            list = toJS(originList);
        }
        if (loading && !(list && list.length)) {
            return (
                <View style={[publicStyles.aliC, publicStyles.mt20]}>
                    <ActivityIndicator />
                    <Text style={fz(22)}>加载中。。。</Text>
                </View>
            );
        }
        if (Array.isArray(list) && list.length) {
            return (
                <FlatList
                    data={list}
                    keyExtractor={({ id }) => id.toString()}
                    refreshing={refreshing}
                    onRefresh={() => initCourseList(courseId, true)}
                    renderItem={({ item: { lessonName, videoId, coverUrl }, index }) => (
                        <TouchableWithoutFeedback onPress={() => navigate('CoursePlay', { lessonName, videoId, coverUrl })}>
                            <View style={[styles.courseItem, publicStyles.jcC]}>
                                <Text style={styles.courseItemText}>{index + 1}、{lessonName}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            );
        }
        return (
            <View style={[publicStyles.aliC, publicStyles.mt20]}>
                <Text style={fz(22)}>暂无数据</Text>
            </View>
        );
    };

    render() {
        const { navigation: { state: { params: { title } } } } = this.props;
        return (
            <Container>
                <Content>
                    <Header title={title} />
                    {this.initList()}
                </Content>
            </Container>
        );
    }
}

export default CourseList;
