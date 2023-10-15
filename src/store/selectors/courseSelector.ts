import { RootState } from '../../store'

export const selectorCourseList = (state: RootState) => state.courses.courseList

export const selectorWorkoutList = (state: RootState) =>
  state.courses.workoutList

export const selectorSelectedCourse = (state: RootState) =>
  state.courses.selectedCourse
