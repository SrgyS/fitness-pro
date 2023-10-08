import React from 'react'
import { StyledMain } from './Main.styles'
import Header from '../../components/Header/Header'
import PromoSection from '../../components/PromoSection/PromoSection'
import CardsSection from '../../components/CardsSection/CardsSection'
import { useAuth } from '../../hooks/useAuth'

type Props = {}

const Main = (props: Props) => {
  const { user, email } = useAuth()
  return (
    <StyledMain>
      <Header user={user} name={email} />
      <PromoSection />
      <CardsSection />
    </StyledMain>
  )
}

export default Main
