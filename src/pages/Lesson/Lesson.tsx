import React, { useMemo, useState } from 'react'
import * as S from './Lesson.style'
import { Button } from '../../components/Button/Button.style'
import Header from '../../components/Header/Header'
import { StyledMain } from '../Main/Main.styles'
import ExerciseProgress from '../../components/ProgressBar/ProgressBar'
import { useAppSelector } from '../../store/hooks/useAppHook'
import {
  selectorProgress,
  selectorSelectedWorkout,
  selectorWorkoutList,
} from '../../store/selectors/courseSelector'
import { useNavigate } from 'react-router-dom'
import TrainProgress from '../ProgressFormPage/ProgressForm'
import { updateProgress } from '../../api/coursesApi'
import { selectorUserId } from '../../store/selectors/userSelector'

type Props = {}

const Lesson = (props: Props) => {
  const navigate = useNavigate()
  const progress = useAppSelector(selectorProgress)
  const selectedWorkout = useAppSelector(selectorSelectedWorkout)
  const [modalOpen, setModalOpen] = useState(false)
  console.log('selectedWorkout', selectedWorkout)
  const selectedWorkoutList = useAppSelector(selectorWorkoutList)
  console.log('selectedWorkoutList', selectedWorkoutList)
  const workout = useMemo(() => {
    return selectedWorkoutList.find(el => el.id === selectedWorkout)
  }, [selectedWorkout, selectedWorkoutList])

  const handleModalOpen = () => setModalOpen(prev => !prev)
  console.log('progress', progress)
  const userId = useAppSelector(selectorUserId)
  console.log('userID', userId)
  const handleUpdate = (changes: { [key: number]: number }) => {

    if (workout?.id)
      updateProgress(userId, workout?.id, {
        ...progress[workout?.id],
        ...changes,
      }).then(()=>{handleModalOpen()})
  }
  return (
    <StyledMain style={{ backgroundColor: '#FAFAFA', height: '100%' }}>
      <Header />
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
                  {workout?.practice.map(exercise => {
                    return (
                      <S.Exercise>
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
                <S.ProgressContainer>
                  <S.ExercisesDone>
                    {workout?.practice.map(exercise => {
                      return <S.ExerciseName>{exercise.name}</S.ExerciseName>
                    })}
                  </S.ExercisesDone>
                  <S.ExerciseBox>
                    {workout?.practice.map(exercise => {
                      return (
                        <ExerciseProgress
                          fillProgress={Math.round(
                            ((progress[workout?.id][exercise?.id] || 0) /
                              exercise?.amount) *
                              100,
                          )}
                          fillColor="#565EEF"
                        />
                      )
                    })}
                  </S.ExerciseBox>
                </S.ProgressContainer>
              </S.LessonProgressWrapper>
            </S.LessonProgress>
          </S.LessonDescription>
        )}
        <TrainProgress
          open={modalOpen}
          handleOpen={handleModalOpen}
          workoutId={workout?.id || ''}
          practice={workout?.practice || []}
          handleUpdate = {handleUpdate}
        />
      </S.LessonContent>
    </StyledMain>
  )
}

export default Lesson
