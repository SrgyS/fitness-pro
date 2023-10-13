import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './UserCourses.Styles'
import ExercisesModal from '../../pages/Exercises/ExercisesForm'

type Props = {}

const UserCourses = (props: Props) => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div>
      <S.MyCourse>Мои курсы</S.MyCourse>
      <S.UserCourse>
        <S.Yoga>
          <S.TextCourses>Йога</S.TextCourses>
          <S.UserCourseButton id="1" onClick={() => setModalActive(true)}>
            Перейти →
          </S.UserCourseButton>
        </S.Yoga>
        <S.Stretching>
          <S.TextCourses>Стретчинг</S.TextCourses>
          <S.UserCourseButton id="2" onClick={() => setModalActive(true)}>
            Перейти →
          </S.UserCourseButton>
        </S.Stretching>
        <S.BodyFlex>
          <S.TextCourses>Бодифлекс</S.TextCourses>
          <S.UserCourseButton id="3" onClick={() => setModalActive(true)}>
            Перейти →
          </S.UserCourseButton>
          <ExercisesModal active={modalActive} setActive={setModalActive} />
        </S.BodyFlex>
      </S.UserCourse>
    </div>
  )
}

export default UserCourses
