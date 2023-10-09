import { RootState } from '../store'

export const selectorCourseList = (state: RootState) => state.course.courseList

export const selectorSelectedCourse = (state: RootState) => state.course.selectedCourse
