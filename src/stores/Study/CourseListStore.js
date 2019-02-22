/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseList } from '../../services/study';

class CourseListData {
    @observable data = { lessons: [] };
    @observable loading = false;
    @observable refreshing = false;

    @action initCourseList = async (courseId, isRefresh) => {
        this.loading = true;
        if (isRefresh) {
            this.refreshing = true;
        }
        const res = await getCourseList(courseId);
        const { data } = res;
        this.data = Object.assign({}, this.data, data);
        this.loading = false;
        if (isRefresh) {
            this.refreshing = false;
        }
    };

    @action reset = () => {
        this.loading = false;
        this.data = Object.assign({}, this.data, { lessons: [] });
    };
}

const CourseListStore = new CourseListData();
export default CourseListStore;
