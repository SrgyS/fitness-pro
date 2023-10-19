import React, { useEffect } from 'react'

import AppRoutes from './components/routing/AppRoutes/AppRoutes'
import { GlobalStyle } from './global.styles'
import { useAppDispatch } from './hooks/reduxHooks'
import { setUser } from './store/slices/userSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      dispatch(setUser(JSON.parse(user)))
    }
  },[])
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
