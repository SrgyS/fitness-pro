import { createSlice } from '@reduxjs/toolkit'
import { ICourse } from '../../types'

interface ICourseStore {
  courseList: ICourse[]
  selectedCourse: ICourse
}

const initialState: ICourseStore = {
  courseList: [],
  selectedCourse: {} as ICourse,
}

export const courseSlice = createSlice({
  name: 'courseSlice',
  initialState,
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = Object.values(action.payload)
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload
    },
  },
})

export const { setCourseList, setSelectedCourse } = courseSlice.actions

export default courseSlice.reducer