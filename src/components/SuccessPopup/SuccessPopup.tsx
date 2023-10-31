import React from 'react'
import * as S from './SuccessPopup.styles'
import successUrl from '../../assets/img/success.png'

type Props = { isOpen: boolean; onClose?: () => void }

const SuccessPopup = ({ isOpen = false }: Props) => {
  if (!isOpen) {
    return null
  }
  return (
    <S.SuccessPopupContainer>
      <S.SuccessPopupBox>
        <S.SuccessPopupText>Ваш прогресс засчитан!</S.SuccessPopupText>
        <S.SuccessImg src={successUrl} alt="success image" />
      </S.SuccessPopupBox>
    </S.SuccessPopupContainer>
  )
}

export default SuccessPopup
