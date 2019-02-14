/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getCourseList } from '../../services/study';

class CourseListData {
    @observable list = [];

    @action initCourseList = async () => {
        const res = await getCourseList();
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
    }
}

const CourseListStore = new CourseListData();
export default CourseListStore;
