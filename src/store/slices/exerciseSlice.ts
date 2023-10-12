import { createSlice } from '@reduxjs/toolkit'
import { IWorkout } from '../../types'

interface IWorkoutStore {
  workoutList: IWorkout[]
  selectedWorkout: IWorkout
}

const initialState: IWorkoutStore = {
  workoutList: [],
  selectedWorkout: {} as IWorkout,
}

export const workoutSlice = createSlice({
  name: 'workoutSlice',
  initialState,
  reducers: {
    setWorkoutList: (state, action) => {
      state.workoutList = Object.values(action.payload)
    },
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload
    },
  },
})

export const { setWorkoutList, setSelectedWorkout } = workoutSlice.actions

export default workoutSlice.reducer
