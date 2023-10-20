import React, { useEffect } from 'react'

import AppRoutes from './components/routing/AppRoutes/AppRoutes'
import { GlobalStyle } from './global.styles'
import { useAppDispatch } from './hooks/reduxHooks'
import { setUser } from './store/slices/userSlice'
import { setSelectedCourse } from './store/slices/courseSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
    const course = localStorage.getItem('selectedCourse')
    if (course) {
      dispatch(setSelectedCourse(JSON.parse(course)))
    }
  },[dispatch])
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
