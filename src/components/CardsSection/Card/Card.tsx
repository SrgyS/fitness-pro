import React from 'react'
import * as S from './Card.styles'
import { Link } from 'react-router-dom'
import { BigButtonUser } from '../../Buttons/MainButtons/Button.styles'

interface CardProps {
  text: string
  imgUrl: string
  id?: string
  onClick: () => void
  shadow?: boolean
  onClickPopUp: () => void
}

const Card = ({ text, imgUrl, id, onClick, onClickPopUp, shadow }: CardProps) => {
  return (
    <>
      {!shadow && (
        <Link to={`/about/${id}`}>
          <S.Card $imgUrl={imgUrl} onClick={onClick}>
            <span>{text}</span>
          </S.Card>
        </Link>
      )}

      {shadow && (
        // <Link to="/exercises">
          <S.CardWithShadow onClick={onClick} $imgUrl={imgUrl}>
            <span>{text}</span>
            <BigButtonUser onClick={onClickPopUp}>Перейти &rarr;</BigButtonUser>
          </S.CardWithShadow>
        // </Link>
      )}
    </>
  )
}

export default Card
