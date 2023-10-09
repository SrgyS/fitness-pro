import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICourse } from '../types'

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-147e2-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  endpoints: (builder) => ({
    getCourses: builder.query<ICourse[], void>({
      query: () => '/courses.json',
    }),
  }),
})

export const { useGetCoursesQuery } = coursesApi
