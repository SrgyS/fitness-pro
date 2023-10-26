import React, { useState } from 'react'
import { StyledSmallButton } from '../Buttons/MainButtons/Button.styles'
import Logo from '../Logo/Logo'
import * as S from './Header.Styles'
import { Link, useLocation } from 'react-router-dom'
import { ArrowDownIcon } from '../../assets/icons/ArrowDownIcon'
import UserMenu from './UserMenu/UserMenu'

type Props = { user?: boolean; name?: string }

const Header = (props: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  const location = useLocation()
  const isHomePage = location.pathname === '/'
  console.log('isMenuVisible', isMenuVisible)
  return (
    <S.Header>
      <Logo textColor={isHomePage ? '#fff' : '#000'} />
      {props.user ? (
        <>
          <S.UserEnter onClick={toggleMenu}>
            <S.UserLogo></S.UserLogo>
            <S.UserName $textColor={isHomePage ? '#fff' : '#000'}>
              {' '}
              {props.name}{' '}
            </S.UserName>
            {/* <S.UserIcon> */}
            <ArrowDownIcon
              className="arrow-icon"
              color={isHomePage ? '#fff' : '#000'}
            />{' '}
            {/* </S.UserIcon> */}
          </S.UserEnter>
          {isMenuVisible && <UserMenu />}
        </>
      ) : (
        <Link to="/login">
          <StyledSmallButton> Войти </StyledSmallButton>
        </Link>
      )}
    </S.Header>
  )
}

export default Header
