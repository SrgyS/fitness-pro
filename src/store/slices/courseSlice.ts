import { createSlice } from '@reduxjs/toolkit'
import { ICourse } from '../../types'

interface ICourseStore {
  courseList: ICourse[]
  selectedCourse: ICourse
  workoutList: ICourse[]
}

const initialState: ICourseStore = {
  courseList: [],
  selectedCourse: {} as ICourse,
  workoutList: [],
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
  },
})

export const { setCourseList, setSelectedCourse, setWorkoutList } =
  courseSlice.actions

export default courseSlice.reducer
