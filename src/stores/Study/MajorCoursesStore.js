/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import { observable, action } from 'mobx';
import { getMajorCourses } from '../../services/study';

class MajorCoursesData {
    @observable list = [];

    @action initMajorCourses = async (catId) => {
        const res = await getMajorCourses(catId);
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
    }
}

const MajorCoursesStore = new MajorCoursesData();
export default MajorCoursesStore;
