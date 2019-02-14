/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import navigationUtils from '../../../../utils/navigationUtils';
import publicStyles from '../../../../styles/public';
import styles from '../styles';

const { navigate } = navigationUtils;

@inject(({ MajorCoursesStore }) => ({ MajorCoursesStore }))
@observer
class MajorCourses extends Component {
    componentDidMount() {
        const { MajorCoursesStore: { initMajorCourses } } = this.props;
        initMajorCourses();
    }

    render() {
        const { MajorCoursesStore: { list: originList } } = this.props;
        const list = toJS(originList);
        return (
            <View style={[publicStyles.flexRow, styles.majorContainer]}>
                {list.map(({ catPhoto, chnName, id }, index) => (
                    <View style={[publicStyles.f1, publicStyles.aliC]} key={index}>
                        <TouchableWithoutFeedback onPress={() => navigate('CourseClass', { title: chnName, id })}>
                            <View>
                                <Image source={{ uri: catPhoto }} style={styles.majorCover} />
                                <Text style={[publicStyles.taC, styles.majorText]}>{chnName}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </View>
        );
    }
}

export default MajorCourses;
