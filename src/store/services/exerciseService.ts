import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const exerciseListApi = createApi({
  reducerPath: 'exerciseListApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  endpoints: builder => ({
    getExerciseList: builder.query({
      query: () => ({
        url: '/workout.json',
      }),
    }),
  }),
})

export const { useGetExerciseListQuery } = exerciseListApi
