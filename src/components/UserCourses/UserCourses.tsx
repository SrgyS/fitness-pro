import React from 'react'
import CardsSection from '../../components/CardsSection/CardsSection'


type Props = { uid: string }

const UserCourses = (props: Props) => {
  const { uid } = props


  return <CardsSection uid={uid} />
}

export default UserCourses
