import { createSlice } from '@reduxjs/toolkit'
import { ICourse, IWorkout } from '../../types'

interface ICourseStore {
  courseList: ICourse[]
  selectedCourse: ICourse
  workoutList: IWorkout[]
  selectedWorkout: string
  progress: IProgress
}

export interface IProgress {
  [key: string]: { [key: string]: number }
}

const initialState: ICourseStore = {
  courseList: [],
  selectedCourse: {} as ICourse,
  workoutList: [],
  selectedWorkout: '',
  progress: {} as IProgress,
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
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload
    },
    setPracticeProgress: (state, action) => {
      state.progress = action.payload
    },
  },
})

export const {
  setCourseList,
  setSelectedCourse,
  setWorkoutList,
  setSelectedWorkout,
  setPracticeProgress,
} = courseSlice.actions

export default courseSlice.reducer
