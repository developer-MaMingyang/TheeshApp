/*
* author: mamingyang@baofeng.com
* date: 2019/2/7
*/

import request from '../utils/request';
import { root } from '../utils/constants';

export const getHotCourses = () => request(`${root}/course/recommend/query`);

export const getMajorCourses = () => request(`${root}/category/findLevelOne`);

export const getCourseClass = carId => request(`${root}/category/findByCategoryId`, {
    body: { carId },
});

export const getCourseList = courseId => request(`${root}/lesson/findByCourseId`, {
    body: { courseId },
});
