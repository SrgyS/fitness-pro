import React from 'react'
import * as S from './Card.styles'
import { Link } from 'react-router-dom'

interface CardProps {
  text: string
  imgUrl: string
  id?: string
  onClick: () => void
  shadow?: boolean
}

const Card = ({ text, imgUrl, id, onClick, shadow }: CardProps) => {
  const CardComponent = shadow ? S.CardWithShadow : S.Card

  return (
    <Link to={`/about/${id}`}>
      <CardComponent $imgUrl={imgUrl} onClick={onClick}>
        <span>{text}</span>
      </CardComponent>
    </Link>
  )
}

export default Card
