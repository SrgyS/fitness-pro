import React from 'react'
import { StyledMain } from './Main.styles'
import Header from '../../components/Header/Header'
import PromoSection from '../../components/PromoSection/PromoSection'
import CardsSection from '../../components/CardsSection/CardsSection'
import { useAuth } from '../../hooks/useAuth'

const Main = () => {
  const { user, email, id } = useAuth()

  return (
    <StyledMain>
      <Header user={user} name={email ?? ''} />
      <PromoSection />
      <CardsSection uid={id ?? ''} />
    </StyledMain>
  )
}

export default Main
