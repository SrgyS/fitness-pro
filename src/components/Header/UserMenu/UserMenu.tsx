import React, { useState } from 'react'
import * as S from './UserMenu.styles'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../../store/slices/userSlice'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

type Props = {}

const UserMenu = (props: Props) => {
  const dispatch = useDispatch()
  const activeLinkClass = 'underline'

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

        <S.StyledMenuItem onClick={() => dispatch(removeUser())}>
          <S.StyledMenuButton>Выйти</S.StyledMenuButton>
        </S.StyledMenuItem>
      </S.StyledUserMenuList>
    </S.StyledUserMenu>
  )
}

export default UserMenu
