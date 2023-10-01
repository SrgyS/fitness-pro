import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './UserCourses.Styles'

type Props = {}

const UserCourses = (props: Props) => {
  return (
    <div>
      <S.MyCourse>Мои курсы</S.MyCourse>
      <S.UserCourse>
        <S.Yoga>
          <S.TextCourses>Йога</S.TextCourses>
          <Link to="#">
            <S.UserCourseButton>Перейти →</S.UserCourseButton>
          </Link>
        </S.Yoga>
        <S.Stretching>
          <S.TextCourses>Стретчинг</S.TextCourses>
          <Link to="#">
            <S.UserCourseButton>Перейти →</S.UserCourseButton>
          </Link>
        </S.Stretching>
        <S.BodyFlex>
          <S.TextCourses>Бодифлекс</S.TextCourses>
          <Link to="#">
            <S.UserCourseButton>Перейти →</S.UserCourseButton>
          </Link>
        </S.BodyFlex>
      </S.UserCourse>
    </div>
  )
}

export default UserCourses
