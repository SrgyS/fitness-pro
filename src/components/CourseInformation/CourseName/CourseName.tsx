import React, { FC } from 'react'
import * as S from './CourseName.style'
import { ICourse } from '../../../types'
import group from '../../../assets/img/Group.png'

const CourseName: FC<Pick<ICourse, 'name'>> = ({ name }) => {
  return (
    <S.CourseNameContainer>
      <S.CourseNameImage src={group} />
      <S.CourseName>{name}</S.CourseName>
    </S.CourseNameContainer>
  )
}

export default CourseName
