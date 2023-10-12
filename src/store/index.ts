import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './slices/courseSlice'
import userReducer from './slices/userSlice'
import { courseListApi } from './services/courseService'
import { exerciseListApi } from './services/exerciseService'
import  workoutSlice from './slices/exerciseSlice'


export const store = configureStore({
  reducer: {
    courses: courseSlice,
    workouts: workoutSlice,
    user: userReducer,
    [courseListApi.reducerPath]: courseListApi.reducer,
    [exerciseListApi.reducerPath]: exerciseListApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),

    courseListApi.middleware,
    exerciseListApi.middleware
  ]
   
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
