/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseClass } from '../../services/study';

class CourseClassData {
    @observable list = [];
    @observable loading = false;
    @observable refreshing = false;

    @action initCourseClass = async (catId, isRefresh) => {
        this.loading = true;
        if (typeof isRefresh === 'boolean' && isRefresh) {
            this.refreshing = true;
        }
        const res = await getCourseClass(catId);
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
        this.loading = false;
        if (typeof isRefresh === 'boolean' && isRefresh) {
            this.refreshing = false;
        }
    };

    @action reset = () => {
        this.list = [];
        this.loading = false;
    }
}

const CourseClassStore = new CourseClassData();
export default CourseClassStore;
