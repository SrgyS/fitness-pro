import React from 'react'
import logoUrl from '../../assets/img/logo.svg'
import * as S from './Logo.styles'
import { NavLink } from 'react-router-dom'
interface LogoProps {
  textColor?: string
}

const Logo: React.FC<LogoProps> = ({ textColor }) => {
  return (
    <NavLink to="/">
      <S.StyledLogo $textColor={textColor}>
        <img src={logoUrl} alt="Logo" />
        <span>SkyFitnessPro</span>
      </S.StyledLogo>
    </NavLink>
  )
}

export default Logo
