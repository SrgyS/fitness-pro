import React from 'react'
import * as S from './UserList.Styles'

type Props = {}

const UserList = (props: Props) => {
  return (
    <S.List>
      <S.Profile> Мой профиль </S.Profile>
      <div>
        <S.UserInfo> Логин: sergey.petrov96 </S.UserInfo>
        <S.UserInfo> Пароль: 4fkhdj880d </S.UserInfo>
      </div>
      <S.UserInfoButton>
        <S.UserButton>Редактировать логин </S.UserButton>
        <S.UserButton>Редактировать пароль </S.UserButton>
      </S.UserInfoButton>
    </S.List>
  )
}

export default UserList