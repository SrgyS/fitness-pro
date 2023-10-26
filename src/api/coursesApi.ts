import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICourse } from '../types'

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-147e2-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  endpoints: builder => ({
    getCourses: builder.query<ICourse[], void>({
      query: () => '/courses.json',
    }),
  }),
})

export async function getCourses() {
  const response = await fetch(
    'https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app/courses.json',
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const courses = await response.json()
  return courses
}

export async function getCoursesWorkout(id: string) {
  const response = await fetch(
    `https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app/courses/${id}/workout.json`,
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const coursesWorkout = await response.json()
  return coursesWorkout
}

export async function getWorkout(id: string) {
  const response = await fetch(
    `https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app/workout/${id}.json`,
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const workout = await response.json()
  return workout
}

export async function updateProgress(
  userId: string | null,
  workoutId: string | null,
  progress: { [key: number]: number },
) {
  const response = await fetch(
    `https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/workouts/${workoutId}.json`,
    { method: 'PATCH', body: JSON.stringify(progress) },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }

  return
}

export const { useGetCoursesQuery } = coursesApi
