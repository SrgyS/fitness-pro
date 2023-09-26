import React from 'react'
import logoUrl from '../../assets/img/logo.svg'
import * as S from './Logo.styles'
interface LogoProps {
  textColor?: string
}

const Logo: React.FC<LogoProps> = ({ textColor }) => {
  return (
    <S.StyledLogo $textColor={textColor}>
      <img src={logoUrl} alt="Logo" />
      <span>SkyFitnessPro</span>
    </S.StyledLogo>
  )
}

export default Logo
