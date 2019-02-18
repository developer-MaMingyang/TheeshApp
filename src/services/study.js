/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import request from '../utils/request';
import { root } from '../utils/constants';

export const getHotCourses = () => request(`${root}/course/recommend/query`);

export const getMajorCourses = () => request(`${root}/category/findLevelOne`);

export const getCourseClass = catId => request(`${root}/course/findByCategoryLevelOneId`, {
    body: { catId },
});

export const getCourseList = courseId => request(`${root}/lesson/findByCourseId`, {
    body: { courseId },
});

export const getAuth = videoId => request(`${root}/lesson/findAuthByVideoId`, {
    body: { videoId },
});
