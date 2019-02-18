/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseClass } from '../../services/study';

class CourseClassData {
    @observable list = [];
    @observable loading = false;

    @action initCourseClass = async (catId) => {
        this.loading = true;
        const res = await getCourseClass(catId);
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
        this.loading = false;
    };

    @action reset = () => {
        this.list = [];
        this.loading = false;
    }
}

const CourseClassStore = new CourseClassData();
export default CourseClassStore;
