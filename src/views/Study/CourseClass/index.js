/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import navigationUtils from '../../../utils/navigationUtils';
import { Header } from '../../../components/HeaderBar';
import publicStyles from '../../../styles/public';
import { fz } from '../../../styles/font';
import styles from '../CourseList/styles';

const { navigate } = navigationUtils;

@inject(({ CourseClassStore }) => ({ CourseClassStore }))
@observer
class CourseClass extends Component {
    componentDidMount() {
        const { CourseClassStore: { initCourseClass }, navigation: { state: { params: { id: catId } } } } = this.props;
        initCourseClass(catId);
    }

    componentWillUnmount() {
        const { CourseClassStore: { reset } } = this.props;
        reset();
    }

    initList = () => {
        const { CourseClassStore: { list: originList, loading } } = this.props;
        const list = toJS(originList);
        console.log(list);
        if (loading) {
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
                    renderItem={({ item: { courseName, id }, index }) => (
                        <TouchableWithoutFeedback onPress={() => navigate('CourseList', { title: courseName, id })}>
                            <View style={[styles.courseItem, publicStyles.jcC]}>
                                <Text style={styles.courseItemText}>{index + 1}、{courseName}</Text>
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

export default CourseClass;
