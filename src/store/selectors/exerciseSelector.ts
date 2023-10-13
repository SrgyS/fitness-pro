import { RootState } from '../../store'

export const selectorWorkoutList = (state: any) => state.workout.workoutList
export const selectorSelectedWorkout = (state: any) => state.workout.selectedWorkout
