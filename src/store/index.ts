import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './slices/courseSlice'
import userReducer from './slices/userSlice'
import { courseListApi } from './services/courseService'

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    user: userReducer,
    [courseListApi.reducerPath]: courseListApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(courseListApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
