import React from 'react'
import * as S from './Card.styles'
import { Link } from 'react-router-dom'

interface CardProps {
  text: string
  imgUrl: string
  id?: string
}

const Card = ({ text, imgUrl, id }: CardProps) => {
  return (
    <Link to={`/about/${id}`}>
      <S.Card imgUrl={imgUrl}>
        <span>{text}</span>
      </S.Card>
    </Link>
  )
}

export default Card
