import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import UserList from '../../components/UserList/UserList'
import UserCourses from '../../components/UserCourses/UserCourses'
import { StyledUser } from './User.Styles'

type Props = {}

const User = (props: Props) => {
  const user = true

  return (
    <>
      <StyledUser>
        <Header user={user} />
        <UserList />
        <UserCourses />
      </StyledUser>
    </>
  )
}

export default User
