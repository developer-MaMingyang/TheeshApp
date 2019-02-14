/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseClass } from '../../services/study';

class CourseClassData {
    @observable list = [];

    @action initCourseClass = async (courseId) => {
        const res = await getCourseClass(courseId);
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
    }
}

const CourseClassStore = new CourseClassData();
export default CourseClassStore;
