import React from 'react'
import { StyledSmallButton } from '../Buttons/MainButtons/Button.styles'
import Logo from '../Logo/Logo'
import * as S from './Header.Styles'
import { Link } from 'react-router-dom'
import { ArrowDownIcon } from '../../assets/icons/ArrowDownIcon'

type Props = { user?: boolean }

const Header = (props: Props) => {
  return (
    <S.Header>
      <Logo textColor={props.user ? 'rgba(0, 0, 0, 1)' : ''} />
      {props.user ? (
        <S.UserEnter>
          <S.UserLogo></S.UserLogo>
          <S.UserName> Сергей </S.UserName>
          <S.UserIcon><ArrowDownIcon />{' '}</S.UserIcon>
        </S.UserEnter>
      ) : (
        <Link to="/login">
          <StyledSmallButton> Войти </StyledSmallButton>
        </Link>
      )}
    </S.Header>
  )
}

export default Header
