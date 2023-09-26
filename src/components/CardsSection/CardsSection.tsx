import React from 'react'
import * as S from './CardsSection.styles'
import { BigButtonMain } from '../Buttons/MainButtons/Button.styles'
import Card from './Card/Card'
import { course } from '../../pages/CourseDescriptionPage/CourseDescriptionPage'

const cardData = [
  { text: 'Йога', imgUrl: 'prof-card-5.png', courseName: 'yoga' },
  { text: 'Стретчинг', imgUrl: 'prof-card-3.png', courseName: 'stretching' },
  {
    text: 'Танцевальный фитнесс',
    imgUrl: 'prof-card-4.png',
    id: 'dance-fitness',
  },
  {
    text: 'Степ-аэробика',
    imgUrl: 'prof-card-2.png',
    courseName: 'step-aerobics',
  },
  { text: 'Бодифлекс', imgUrl: 'prof-card-1.png', courseName: 'bodyflex' },
]

const CardsSection = () => {
  return (
    <S.CardsSection>
      <S.CardsWrapper>
        {cardData.map(card => (
          <Card
            key={course.id}
            text={course.name}
            imgUrl={require(`../../../src/assets/img/${card.imgUrl}`)}
            id={course.id}
          />
        ))}
      </S.CardsWrapper>
      <BigButtonMain>Наверх &uarr;</BigButtonMain>
    </S.CardsSection>
  )
}

export default CardsSection
