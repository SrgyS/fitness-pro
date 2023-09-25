import React from 'react'
import * as S from './CardsSection.styles'
import { BigButtonMain } from '../Buttons/MainButtons/Button.styles'
import Card from './Card/Card'

const cardData = [
  { text: 'Йога', imgUrl: 'prof-card-5.png' },
  { text: 'Стретчинг', imgUrl: 'prof-card-3.png' },
  { text: 'Танцевальный фитнесс', imgUrl: 'prof-card-4.png' },
  { text: 'Степ-аэробика', imgUrl: 'prof-card-2.png' },
  { text: 'Бодифлекс', imgUrl: 'prof-card-1.png' },
]

const CardsSection = () => {
  return (
    <S.CardsSection>
      <S.CardsWrapper>
        {cardData.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            imgUrl={require(`../../../src/assets/img/${card.imgUrl}`)}
          />
        ))}
      </S.CardsWrapper>
      <BigButtonMain>Наверх &uarr;</BigButtonMain>
    </S.CardsSection>
  )
}

export default CardsSection
