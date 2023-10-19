import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  ICourse,
  IPracticeData,
  IPracticeDataPayload,
  IWorkout,
} from '../../types'

interface ICourseStore {
  courseList: ICourse[]
  selectedCourse: ICourse
  workoutList: IWorkout[]
  // lessonData: IWorkout
  practiceData: Record<string, IPracticeData[]>
}

const initialState: ICourseStore = {
  courseList: [],
  selectedCourse: {} as ICourse,
  workoutList: [],
  // lessonData: {} as IWorkout,
  practiceData: {},
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
    setPracticeData: (state, action: PayloadAction<IPracticeDataPayload>) => {
      const { id, practiceData } = action.payload
      if (state.practiceData[id]) {
        state.practiceData[id] = practiceData
      } else {
        state.practiceData[id] = practiceData
      }
    },
    // setLessonData: (state, action: PayloadAction<IWorkout>) => {
    //   state.lessonData = action.payload
    // },
  },
})

export const {
  setCourseList,
  setSelectedCourse,
  setWorkoutList,
  // setLessonData,
  setPracticeData,
} = courseSlice.actions

export default courseSlice.reducer
