import { RootState } from '../../store'

export const selectorWorkoutList = (state: RootState) => state.courses.workoutList
export const selectorSelectedWorkout = (state: RootState) => state.courses.selectedWorkout
