import { RootState } from '../../store'

export const selectorCourseList = (state: RootState) => state.courses.courseList

export const selectorWorkoutList = (state: RootState) =>
  state.courses.workoutList

export const selectorSelectedCourse = (state: RootState) =>
  state.courses.selectedCourse

export const selectorSelectedWorkout = (state: RootState) =>
  state.courses.selectedWorkout

export const selectorProgress = (state: RootState) => state.courses.progress
