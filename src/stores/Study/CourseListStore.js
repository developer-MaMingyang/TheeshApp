/*
* author: mamingyang@baofeng.com
* date: 2019/2/14
*/

import { observable, action } from 'mobx';
import { getAuth, getCourseList } from '../../services/study';

class CourseListData {
    @observable data = { lessons: [] };
    @observable loading = false;
    @observable refreshing = false;
    @observable loadingPlayAuth = false;
    @observable currentPlay = {
        playAuth: '',
        videoId: '',
        coverUrl: '',
    };

    @action initCourseList = async (courseId, isRefresh) => {
        this.loading = true;
        if (isRefresh) {
            this.refreshing = true;
        }
        const res = await getCourseList(courseId);
        console.log(res);
        const { data } = res;
        this.data = Object.assign({}, this.data, data);
        this.loading = false;
        if (isRefresh) {
            this.refreshing = false;
        }
    };

    @action initAuth = async (videoId, coverUrl) => {
        this.loadingPlayAuth = true;
        this.currentPlay.playAuth = '';
        this.currentPlay.videoId = '';
        this.currentPlay.coverUrl = '';
        const { data: playAuth } = await getAuth(videoId);
        this.currentPlay.playAuth = playAuth;
        this.currentPlay.videoId = videoId;
        this.currentPlay.coverUrl = coverUrl;
        this.loadingPlayAuth = false;
    };

    @action reset = () => {
        this.loading = false;
        this.data = Object.assign({}, this.data, { lessons: [] });
    };
}

const CourseListStore = new CourseListData();
export default CourseListStore;
