/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseList } from '../../services/study';

class CourseListData {
    @observable data = { lessons: [] };
    @observable loading = false;

    @action initCourseList = async (courseId) => {
        this.loading = true;
        const res = await getCourseList(courseId);
        const { data } = res;
        this.data = Object.assign({}, this.data, data);
        this.loading = false;
    };

    @action reset = () => {
        this.loading = false;
        this.data = Object.assign({}, this.data, { lessons: [] });
    };
}

const CourseListStore = new CourseListData();
export default CourseListStore;
