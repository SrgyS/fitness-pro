import React from 'react'
import * as S from './UserList.Styles'
import { NavLink } from 'react-router-dom'

type Props = { name: string }

const UserList = ({ name }: Props) => {
  return (
    <S.List>
      <S.Profile> Мой профиль </S.Profile>
      <div>
        <S.UserInfo> Логин: {name} </S.UserInfo>
        <S.UserInfo> Пароль: 4fkhdj880d </S.UserInfo>
      </div>
      <S.UserInfoButton>
        <S.UserButton>
          <NavLink to="/change/login">Редактировать логин </NavLink>
        </S.UserButton>
        <S.UserButton>
          <NavLink to="/change/password">Редактировать пароль </NavLink>
        </S.UserButton>
      </S.UserInfoButton>
    </S.List>
  )
}

export default UserList
