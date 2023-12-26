import * as S from './Lesson.style'

import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
} from 'firebase/auth'
import React, { useMemo, useState } from 'react'
import { get, getDatabase, ref, set } from 'firebase/database'
import {
  selectorProgress,
  selectorSelectedWorkout,
  selectorWorkoutList,
} from '../../store/selectors/courseSelector'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'

import { Button } from '../../components/Button/Button.style'
import ExerciseProgress from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header'
import { StyledError } from '../../components/Forms/form.styled'
import { StyledMain } from '../Main/Main.styles'
import SuccessPopup from '../../components/SuccessPopup/SuccessPopup'
import TrainProgress from '../ProgressFormPage/ProgressForm'
import { selectorUserId } from '../../store/selectors/userSelector'
import { setPracticeProgress } from '../../store/slices/courseSlice'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Lesson = () => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const { user, email, password } = useAuth()

  const progress = useAppSelector(selectorProgress)
  const navigate = useNavigate()
  const selectedWorkout = useAppSelector(selectorSelectedWorkout)

  const [modalOpen, setModalOpen] = useState(false)
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false)

  const handleSaveSuccess = () => {
    setIsSuccessPopupOpen(true)

    setTimeout(() => {
      setIsSuccessPopupOpen(false)
    }, 1500)
  }

  const selectedWorkoutList = useAppSelector(selectorWorkoutList)

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

  if (modalOpen) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }

  const userId = useAppSelector(selectorUserId)

  const auth = getAuth()
  const updateProgress = async (
    userId: string | null,
    workoutId: string,
    progress: { [key: number]: number },
  ) => {
    const user = await auth.currentUser

    if (!user) {
      setErrorMessage('Авторизуйтесь для добавления прогресса')
      setTimeout(() => {
        navigate('/login')
      }, 2000)

      return
    }

    if (!workoutId) {
      setErrorMessage('Тренировка не найдена')
      setTimeout(() => {
        navigate('/')
      }, 2000)
      return
    }

    if (!email) {
      setErrorMessage('Отсутствует email')
      setTimeout(() => {
        navigate('/login')
      }, 2000)
      return
    }
    if (password !== null) {
      const credentials = EmailAuthProvider.credential(email, password)

      try {
        await reauthenticateWithCredential(user, credentials)
      } catch (reauthError) {
        setErrorMessage('Ошибка авторизации')
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      }
    }
    const db = getDatabase()

    const userWorkoutsRef = ref(db, `users/${user.uid}/workouts`)

    try {
      const snapshot = await get(userWorkoutsRef)

      const currentWorkouts = snapshot.val() || []

      currentWorkouts[workoutId] = Object.values(progress)

      await set(userWorkoutsRef, currentWorkouts)
    } catch (error) {
      console.error('Error updating progress:', error)
      setErrorMessage('Произошла ошибка при обновлении прогресса')
    }
  }

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

  return (
    <StyledMain
      style={{
        backgroundColor: '#FAFAFA',
        height: '100%',
      }}
    >
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
              {errorMessage && <StyledError>{errorMessage}</StyledError>}
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
                          $fillProgress={
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
                          $fillColor={colors[index % colors.length]}
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
