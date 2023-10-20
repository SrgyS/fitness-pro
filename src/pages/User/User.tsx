import React from 'react'
import Header from '../../components/Header/Header'
import UserList from '../../components/UserList/UserList'
import { StyledUser } from './User.Styles'
import { useAuth } from '../../hooks/useAuth'
import CardsSection from '../../components/CardsSection/CardsSection'

type Props = {}

const User = (props: Props) => {
  const { user, id, email, password } = useAuth()

  return (
    <>
      <StyledUser>
        <Header user={user} name={email} />
        <UserList name={email} password={password} />
        <CardsSection uid={id} />
      </StyledUser>
    </>
  )
}

export default User
