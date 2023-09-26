import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import * as S from './CourseDescriptionPage2.style'
import CourseInformation from '../../components/CourseInformation/CourseInformation'
import { ICourse } from '../../types'
import Bid from '../../components/Bid/Bid'

export const course: ICourse = {
  id: '1',
  name: 'Йога',
  desires: [
    'Давно хотели попробовать йогу, но не решались начать.',
    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
    'Ищете активность, полезную для тела и души.',
  ],
  directions: [
    'Йога для новичков',
    'Классическая йога',
    'Йогатерапия',
    'Кундалини-йога',
    'Хатха-йога',
    'Аштанга-йога',
  ],
  description:
    'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.',
}

const CourseDescriptionPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <S.CourseDescriptionPage>
      <Logo textColor="black" />
      <CourseInformation
        name={course.name}
        description={course.description}
        desires={course.desires}
        directions={course.directions}
      />
      <Bid />
    </S.CourseDescriptionPage>
  )
}

export default CourseDescriptionPage
