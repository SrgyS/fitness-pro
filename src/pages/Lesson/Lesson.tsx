import React, { useMemo, useState } from 'react'
import * as S from './Lesson.style'
import { Button } from '../../components/Button/Button.style'
import Header from '../../components/Header/Header'
import { StyledMain } from '../Main/Main.styles'
import ExerciseProgress from '../../components/ProgressBar/ProgressBar'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import {
  selectorProgress,
  selectorSelectedWorkout,
  selectorWorkoutList,
} from '../../store/selectors/courseSelector'

import TrainProgress from '../ProgressFormPage/ProgressForm'
import { updateProgress } from '../../api/coursesApi'
import { selectorUserId } from '../../store/selectors/userSelector'
import { setPracticeProgress } from '../../store/slices/courseSlice'
import { useAuth } from '../../hooks/useAuth'
import SuccessPopup from '../../components/SuccessPopup/SuccessPopup'

const Lesson = () => {
  const dispatch = useAppDispatch()

  const { user, email } = useAuth()

  const progress = useAppSelector(selectorProgress)
  const selectedWorkout = useAppSelector(selectorSelectedWorkout)
  console.log('selectedWorkout', selectedWorkout)

  const [modalOpen, setModalOpen] = useState(false)
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false)

  const handleSaveSuccess = () => {
    setIsSuccessPopupOpen(true)

    setTimeout(() => {
      setIsSuccessPopupOpen(false)
    }, 1500)
  }

  const selectedWorkoutList = useAppSelector(selectorWorkoutList)
  console.log('selectedWorkoutList', selectedWorkoutList)

  const workout = useMemo(() => {
    return selectedWorkoutList.find(el => el.id.trim() === selectedWorkout)
  }, [selectedWorkout, selectedWorkoutList])

  const colors = [
    'rgba(86, 94, 239)',
    'rgba(255, 109, 0)',
    'rgba(154, 72, 241)',
    'rgba(43, 204, 23)',
    'rgba(239, 86, 224)',
  ]

  const bgColors = [
    'rgba(86, 94, 239, 0.1)',
    'rgba(255, 109, 0, 0.1)',
    'rgba(154, 72, 241, 0.1)',
    'rgba(43, 204, 23, 0.1)',
    'rgba(239, 86, 224, 0.1)',
  ]

  const handleModalOpen = () => setModalOpen(prev => !prev)
  console.log('progress', progress)

  const userId = useAppSelector(selectorUserId)
  console.log('userID', userId)

  const handleUpdate = (changes: { [key: number]: number }) => {
    if (workout?.id.trim())
      updateProgress(userId, workout?.id.trim(), {
        ...progress[workout?.id.trim()],
        ...changes,
      }).then(() => {
        handleModalOpen()
        dispatch(
          setPracticeProgress({
            [workout.id.trim()]: { ...progress[workout.id.trim()], ...changes },
          }),
        )
        handleSaveSuccess()
      })
  }
  console.log('workout', workout?.video)
  return (
    <StyledMain style={{ backgroundColor: '#FAFAFA', height: '100%' }}>
      <Header user={user} name={email ?? ''} />
      <S.LessonContent>
        <S.LessonTitle> {workout?.course}</S.LessonTitle>
        <S.LessonPath>{workout?.name}</S.LessonPath>
        <S.LessonVideoSection>
          <S.LessonVideo
            src={workout?.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            allowFullScreen
            title="video"
          ></S.LessonVideo>
        </S.LessonVideoSection>
        {workout?.practice && (
          <S.LessonDescription>
            <S.LessonExercises>
              <S.Exercises>
                <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
                <S.ExercisesList>
                  {workout?.practice.map((exercise, index) => {
                    return (
                      <S.Exercise key={index}>
                        {exercise.name} ({exercise.amount} повторений)
                      </S.Exercise>
                    )
                  })}
                </S.ExercisesList>
              </S.Exercises>
              <Button
                style={{ marginTop: '40px', marginBottom: '46px' }}
                onClick={handleModalOpen}
              >
                Заполнить свой прогресс
              </Button>
            </S.LessonExercises>
            <S.LessonProgress>
              <S.LessonProgressWrapper>
                <S.LessonProgressTitle>
                  Мой прогресс по тренировке {workout?.number}:
                </S.LessonProgressTitle>
                {workout?.practice.map((exercise, index) => {
                  const workoutProgress = progress[workout?.id]
                  return (
                    <S.ProgressContainer key={index}>
                      <S.ExercisesDone>
                        <S.ExerciseName>{exercise.name}</S.ExerciseName>
                      </S.ExercisesDone>
                      <S.ExerciseBox>
                        <ExerciseProgress
                          fillProgress={
                            workoutProgress && exercise?.amount
                              ? Math.round(
                                  Math.min(
                                    100,
                                    Math.max(
                                      0,
                                      ((workoutProgress[exercise?.id] || 0) /
                                        exercise?.amount) *
                                        100,
                                    ),
                                  ),
                                )
                              : 0
                          }
                          fillColor={colors[index % colors.length]}
                          bgColor={bgColors[index % colors.length]}
                        />
                      </S.ExerciseBox>
                    </S.ProgressContainer>
                  )
                })}
              </S.LessonProgressWrapper>
            </S.LessonProgress>
          </S.LessonDescription>
        )}
        <TrainProgress
          open={modalOpen}
          handleOpen={handleModalOpen}
          workoutId={workout?.id.trim() || ''}
          practice={workout?.practice || []}
          handleUpdate={handleUpdate}
        />
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          onClose={() => setIsSuccessPopupOpen(false)}
        />
      </S.LessonContent>
    </StyledMain>
  )
}

export default Lesson
