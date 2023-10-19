import React, { useEffect } from 'react'
import * as S from './Lesson.style'

import Header from '../../components/Header/Header'
import { StyledMain } from '../Main/Main.styles'
import Image from '../../assets/img/temp-for-video.jpg'
import ExerciseProgress from '../../components/ProgressBar/ProgressBar'
import { useAuth } from '../../hooks/useAuth'
import { Link, useParams } from 'react-router-dom'
import {
  selectorSelectedCourse,
  selectorWorkoutList,
} from '../../store/selectors/courseSelector'
import { useAppSelector } from '../../store/hooks/useAppHook'
import { IWorkout } from '../../types'
import { UserButton } from '../../components/UserList/UserList.Styles'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setPracticeData } from '../../store/slices/courseSlice'

type Props = {}

const Lesson = (props: Props) => {
  const { user, email } = useAuth()
  const colors = ['#565EEF', '#FF6D00', '#9A48F1']

  const { id } = useParams()
  const dispatch = useAppDispatch()

  const workoutList = useAppSelector(selectorWorkoutList)

  const lessonData: IWorkout | undefined = workoutList.find(
    workout => workout.id === id,
  )

  const currentCourse = useAppSelector(selectorSelectedCourse)
  const practiceData = lessonData?.practice || []

  // const updatedPracticeData = {
  //   [id ? id : '0']: practiceData, // Используйте значение `id` в качестве ключа и передайте `practiceData`
  // }
  if (id) {
    const idString = String(id)
    dispatch(setPracticeData({ id: idString, practiceData }))
  }

  useEffect(() => {
    console.log('practiceData1', practiceData)
    console.log('lessonId', id)
    console.log('lessonData', lessonData)
  }, [id, lessonData])

  return (
    <StyledMain style={{ backgroundColor: '#FAFAFA', height: '100%' }}>
      <Header user={user} name={email} />
      <S.LessonContent>
        <S.LessonTitle> {currentCourse?.name}</S.LessonTitle>
        <S.LessonPath>
          {lessonData?.name} / {lessonData?.course} / {lessonData?.number} день
        </S.LessonPath>
        <S.LessonVideoSection>
          <S.LessonVideo>
            <img src={Image} alt="" />
          </S.LessonVideo>
        </S.LessonVideoSection>
        <S.LessonDescription>
          <S.LessonExercises>
            <S.Exercises>
              <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
              <S.ExercisesList>
                {practiceData.map((practice, index) => (
                  <S.Exercise key={index}>
                    {practice.name} ({practice.amount} повторений)
                  </S.Exercise>
                ))}
              </S.ExercisesList>
            </S.Exercises>
            <Link to={`/progress/${id}`}>
              <UserButton>Заполнить свой прогресс</UserButton>
            </Link>
          </S.LessonExercises>
          <S.LessonProgress>
            <S.LessonProgressWrapper>
              <S.LessonProgressTitle>
                Мой прогресс по тренировке {lessonData?.number}:
              </S.LessonProgressTitle>
              {practiceData.map((practice, index) => (
                <S.ProgressContainer key={index}>
                  <S.ExercisesDone>
                    <S.ExerciseName>{practice.name}</S.ExerciseName>
                  </S.ExercisesDone>
                  <S.ExerciseBox>
                    <ExerciseProgress
                      fillProgress="0"
                      fillColor={colors[index % colors.length]}
                    />
                  </S.ExerciseBox>
                </S.ProgressContainer>
              ))}
            </S.LessonProgressWrapper>
          </S.LessonProgress>
        </S.LessonDescription>
      </S.LessonContent>
    </StyledMain>
  )
}

export default Lesson
