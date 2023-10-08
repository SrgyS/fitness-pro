import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
}

const coursesSliice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload
    },
  },
})
export const { setCourses } = coursesSliice.actions
export default coursesSliice.reducer
