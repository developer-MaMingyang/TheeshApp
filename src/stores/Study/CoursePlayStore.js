/*
* author: mamingyang@baofeng.com
* date: 2019/2/18
*/

import { observable, action } from 'mobx';
import { getAuth } from '../../services/study';

class CoursePlayData {
    @observable playAuth = '';

    @action initAuth = async (videoId) => {
        const { data: playauth } = await getAuth(videoId);
        this.playAuth = playauth;
    };

    @action reset = () => {
        this.playAuth = '';
    };
}

const CoursePlayStore = new CoursePlayData();
export default CoursePlayStore;
