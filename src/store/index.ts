import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './slices/coursesSlice'
import userReducer from './slices/userSlice'
import { coursesApi } from '../api/coursesApi'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coursesApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
