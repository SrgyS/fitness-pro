import React from 'react'
import { StyledSmallButton } from '../Buttons/MainButtons/Button.styles'
import Logo from '../Logo/Logo'
import * as S from './Header.Styles'

type Props = {}

const Header = (props: Props) => {
  return (
    <S.Header>
      <Logo />
      <StyledSmallButton>Войти</StyledSmallButton>
    </S.Header>
  )
}

export default Header
