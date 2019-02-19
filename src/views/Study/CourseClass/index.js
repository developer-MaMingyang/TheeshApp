/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import React, { Component } from 'react';
import { View, Text, ActivityIndicator, RefreshControl, TouchableWithoutFeedback, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import BoxShadow from 'react-native-shadow/lib/BoxShadow';
import navigationUtils from '../../../utils/navigationUtils';
import { Header } from '../../../components/HeaderBar';
import publicStyles from '../../../styles/public';
import { fz } from '../../../styles/font';
import styles from './styles';
import { scaleSize } from '../../../utils/screen';

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
        if (Array.isArray(list) && list.length) {
            const options = {
                width: scaleSize(346),
                height: scaleSize(360),
                color: '#000',
                border: scaleSize(6),
                radius: scaleSize(8),
                opacity: 0.23,
                x: 0,
                y: scaleSize(4),
                style: { ...publicStyles.mb20 },
            };
            return (
                <View style={[publicStyles.flexRow, publicStyles.flexWrap, publicStyles.jcSb, styles.classContainer]}>
                    {list.map(({ coursePhoto, courseName, id }, index) => (
                        <BoxShadow key={index} setting={options}>
                            <View style={styles.classItem}>
                                <TouchableWithoutFeedback onPress={() => navigate('CourseList', { title: courseName, id })}>
                                    <View>
                                        <Image source={{ uri: coursePhoto }} style={styles.classItemImg} />
                                        <Text style={styles.classItemTitle}>{courseName}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </BoxShadow>
                    ))}
                </View>
            );
        }
        if (loading) {
            return (
                <View style={[publicStyles.aliC, publicStyles.mt20]}>
                    <ActivityIndicator />
                    <Text style={fz(22)}>加载中。。。</Text>
                </View>
            );
        }
        return (
            <View style={[publicStyles.aliC, publicStyles.mt20]}>
                <Text style={fz(22)}>暂无数据</Text>
            </View>
        );
    };

    render() {
        const { CourseClassStore: { refreshing, initCourseClass }, navigation: { state: { params: { title, id: catId } } } } = this.props;
        return (
            <Container>
                <Content
                    refreshControl={(
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => initCourseClass(catId, true)}
                        />
                    )}
                >
                    <Header title={title} />
                    {this.initList()}
                </Content>
            </Container>
        );
    }
}

export default CourseClass;
