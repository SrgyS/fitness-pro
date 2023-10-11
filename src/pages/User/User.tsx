import React from 'react'
import Header from '../../components/Header/Header'
import UserList from '../../components/UserList/UserList'
import UserCourses from '../../components/UserCourses/UserCourses'
import { StyledUser } from './User.Styles'
import { useAuth } from '../../hooks/useAuth'

type Props = {}

const User = (props: Props) => {
  const { user, email, password } = useAuth()

  return (
    <>
      <StyledUser>
        <Header user={user} name={email} />
        <UserList name={email} password={password} />
        <UserCourses />
      </StyledUser>
    </>
  )
}

export default User
