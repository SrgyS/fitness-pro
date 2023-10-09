import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './slices/courseSlice'
import { courseListApi } from './services/courseService'

export const store = configureStore({
  reducer: {
    course: courseSlice,
    [courseListApi.reducerPath]: courseListApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    courseListApi.middleware,
  ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
