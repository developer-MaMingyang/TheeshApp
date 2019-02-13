/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import publicStyles from '../../../../styles/public';
import styles from '../styles';
import { scaleSize } from '../../../../utils/screen';

@inject(({ HotCoursesStore }) => ({ HotCoursesStore }))
@observer

class HotCourses extends Component {
    componentDidMount() {
        const { HotCoursesStore: { initHotCourses } } = this.props;
        initHotCourses();
    }

    render() {
        const { HotCoursesStore: { list: originList } } = this.props;
        const list = toJS(originList);
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
        if (list.length) {
            return (
                <View style={styles.hotContainer}>
                    <View style={styles.hotTitleWrapper}>
                        <Text style={styles.hotTitle}>热门课程</Text>
                    </View>
                    <View style={[publicStyles.flexRow, publicStyles.flexWrap, publicStyles.jcSb]}>
                        {list.map(({ coursePhoto, courseName }, index) => (
                            <BoxShadow key={index} setting={options}>
                                <View style={styles.hotItem}>
                                    <TouchableWithoutFeedback onPress={() => alert(courseName)}>
                                        <View>
                                            <Image source={{ uri: coursePhoto }} style={styles.hotItemImg} />
                                            <Text style={styles.hotItemTitle}>{courseName}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </BoxShadow>
                        ))}
                    </View>
                </View>
            );
        }
        return null;
    }
}

export default HotCourses;
