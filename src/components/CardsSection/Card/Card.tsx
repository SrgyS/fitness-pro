import React from 'react'
import * as S from './Card.styles'

interface CardProps {
  text: string
  imgUrl: string
}

const Card = ({ text, imgUrl }: CardProps) => {
  return (
    <S.Card imgUrl={imgUrl}>
      <span>{text}</span>
    </S.Card>
  )
}

export default Card
