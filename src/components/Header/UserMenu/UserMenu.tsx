import React from 'react'
import * as S from './UserMenu.styles'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../../store/slices/userSlice'
import { NavLink, useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { getAuth, signOut } from 'firebase/auth'

const UserMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const activeLinkClass = 'underline'
  const handleSignOut = () => {
    const auth = getAuth()

    localStorage.clear()

    dispatch(removeUser())

    signOut(auth)
      .then(() => {
        console.log('Пользователь успешно разлогинен')
      })
      .catch(error => {
        console.error('Ошибка при разлогинивании:', error)
      })
    navigate('/')
  }

  return (
    <S.StyledUserMenu>
      <S.StyledUserMenuList>
        <S.StyledMenuItem>
          <NavLink
            to="/user"
            className={({ isActive }) => {
              return cn('menu__link', { [activeLinkClass]: isActive })
            }}
          >
            Мой профиль
          </NavLink>
        </S.StyledMenuItem>

        <S.StyledMenuItem>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return cn('menu__link', { [activeLinkClass]: isActive })
            }}
          >
            На главную
          </NavLink>
        </S.StyledMenuItem>

        <S.StyledMenuItem onClick={() => handleSignOut()}>
          <S.StyledMenuButton>Выйти</S.StyledMenuButton>
        </S.StyledMenuItem>
      </S.StyledUserMenuList>
    </S.StyledUserMenu>
  )
}

export default UserMenu
