import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../../pages/Auth/Auth'
import User from '../../../pages/User/User'
import Lesson from '../../../pages/Lesson/Lesson'

import Main from '../../../pages/Main/Main'
import NotFound from '../../../pages/NotFound/NotFound'
import CourseDescription from '../../../pages/CourseDescriptionPage/CourseDescriptionPage'
import Register from '../../../pages/Auth/Register'

import ChangePassword from '../../../pages/Auth/NewAuthMetasForms/ChangePassword'
import ChangeLogin from '../../../pages/Auth/NewAuthMetasForms/ChangeLogin'

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
function AppRoutes() {
  const user = localStorage.getItem('user')

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about/:id" element={<CourseDescription />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/user" element={<User />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/change/password" element={<ChangePassword />} />
        <Route path="/change/login" element={<ChangeLogin />} />
        {/* <Route path="/exercises" element={<Exercises />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
