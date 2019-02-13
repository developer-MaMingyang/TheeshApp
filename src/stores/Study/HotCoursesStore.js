/*
* author: mamingyang@baofeng.com
* date: 2019/2/6
*/

import { observable, action } from 'mobx';
import { getHotCourses } from '../../services/study';

class HotCoursesData {
    @observable list = [];

    @action initHotCourses = async () => {
        const res = await getHotCourses();
        console.log(res);
        const { data } = res;
        if (Array.isArray(data)) {
            this.list = data;
        } else {
            this.list = [];
        }
    }
}

const HotCoursesStore = new HotCoursesData();
export default HotCoursesStore;
