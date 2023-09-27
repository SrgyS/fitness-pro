import React from 'react'
import { StyledSmallButton } from '../Buttons/MainButtons/Button.styles'
import Logo from '../Logo/Logo'
import * as S from './Header.Styles'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <S.Header>
      <Logo />
      <Link to="/login">
        <StyledSmallButton>Войти</StyledSmallButton>
      </Link>
    </S.Header>
  )
}

export default Header
