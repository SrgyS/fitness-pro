import React, { FC } from 'react'
import * as S from './Bid.style'
import svgUrl from '../../assets/img/bid.svg'
import { Button } from '../Button/Button.style'

const Bid: FC<{}> = () => {
  return (
    <S.BidContainer>
      <S.SignUp>
        <p>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button style={{ marginTop: '46px' }}>Записаться на тренировку</Button>
      </S.SignUp>
      <S.BidImg alt="Рука с телефоном" src={svgUrl} />
    </S.BidContainer>
  )
}

export default Bid
