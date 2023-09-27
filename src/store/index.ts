import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './slices/coursesSlice'
import { coursesApi } from '../api/coursesApi'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
})
