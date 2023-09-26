import React from 'react'
import { ICourse } from '../../types'
import { useParams } from 'react-router-dom'
import * as S from './CourseDescription.style'
import Logo from '../../components/Logo/Logo'
import CourseInformation from '../../components/CourseInformation/CourseInformation'
import Bid from '../../components/Bid/Bid'

type Props = {}

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

const CourseDescription = (props: Props) => {
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
export default CourseDescription
