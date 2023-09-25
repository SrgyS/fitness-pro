import React from 'react'
import * as S from './CardsSection.styles'
import { BigButtonMain } from '../Buttons/MainButtons/Button.styles'
import Card from './Card/Card'
import { useId } from 'react'

const cardData = [
  { text: 'Йога', imgUrl: 'prof-card-5.png', courseName: 'yoga' },
  { text: 'Стретчинг', imgUrl: 'prof-card-3.png', courseName: 'stretching' },
  {
    text: 'Танцевальный фитнесс',
    imgUrl: 'prof-card-4.png',
    courseName: 'dance-fitness',
  },
  {
    text: 'Степ-аэробика',
    imgUrl: 'prof-card-2.png',
    courseName: 'step-aerobics',
  },
  { text: 'Бодифлекс', imgUrl: 'prof-card-1.png', courseName: 'bodyflex' },
]

const CardsSection = () => {
  const cardId = useId()
  return (
    <S.CardsSection>
      <S.CardsWrapper>
        {cardData.map(card => (
          <Card
            key={cardId}
            text={card.text}
            imgUrl={require(`../../../src/assets/img/${card.imgUrl}`)}
            courseName={card.courseName}
          />
        ))}
      </S.CardsWrapper>
      <BigButtonMain>Наверх &uarr;</BigButtonMain>
    </S.CardsSection>
  )
}

export default CardsSection
