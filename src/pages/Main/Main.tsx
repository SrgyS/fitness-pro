import React from 'react'
import { StyledMain } from './Main.styles'
import Header from '../../components/Header/Header'
import PromoSection from '../../components/PromoSection/PromoSection'
import CardsSection from '../../components/CardsSection/CardsSection'

type Props = {}

const Main = (props: Props) => {
  return (
    <StyledMain>
      <Header />
      <PromoSection />
      <CardsSection />
    </StyledMain>
  )
}

export default Main
