import React from 'react'
import * as S from './Card.styles'
import { Link } from 'react-router-dom'

interface CardProps {
  text?: string
  imgUrl?: string
  courseName?: string
}

const Card = ({ text, imgUrl, courseName }: CardProps) => {
  return (
    <Link to={`/${courseName}`}>
      <S.Card imgUrl={imgUrl}>
        <span>{text}</span>
      </S.Card>
    </Link>
  )
}

export default Card
