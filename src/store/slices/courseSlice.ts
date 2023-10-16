import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICourse, IWorkout } from '../../types'

interface ICourseStore {
  courseList: ICourse[]
  selectedCourse: ICourse
  workoutList: ICourse[]
  lessonData: IWorkout
}

const initialState: ICourseStore = {
  courseList: [],
  selectedCourse: {} as ICourse,
  workoutList: [],
  lessonData: {} as IWorkout,
}

export const courseSlice = createSlice({
  name: 'courseSlice',
  initialState,
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = Object.keys(action.payload).map(key => ({
        id: key,
        ...action.payload[key],
      }))
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload
    },
    setWorkoutList: (state, action) => {
      state.workoutList = Object.keys(action.payload).map(key => ({
        id: key,
        ...action.payload[key],
      }))
    },
    setLessonData: (state, action: PayloadAction<IWorkout>) => {
      state.lessonData = action.payload
    },
  },
})

export const {
  setCourseList,
  setSelectedCourse,
  setWorkoutList,
  setLessonData,
} = courseSlice.actions

export default courseSlice.reducer
