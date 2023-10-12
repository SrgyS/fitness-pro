import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import UserList from '../../components/UserList/UserList'
import UserCourses from '../../components/UserCourses/UserCourses'
import { StyledUser } from './User.Styles'
import { useAuth } from '../../hooks/useAuth'
import { useGetExerciseListQuery } from '../../store/services/exerciseService'

type Props = {}

const User = (props: Props) => {
  const { user, email } = useAuth()
  const {data} = useGetExerciseListQuery({})

  console.log(data)
  return (
    <>
      <StyledUser>
        <Header user={user} name={email} />
        <UserList name={email} />
        <UserCourses />
      </StyledUser>
    </>
  )
}

export default User
