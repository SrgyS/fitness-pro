import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { useGetWorkoutListQuery } from '../../store/services/courseService'
import { setWorkoutList, setLessonData } from '../../store/slices/courseSlice'
import * as S from './Exercises.styled'
import { selectorSelectedCourse } from '../../store/selectors/courseSelector'
import { IWorkout } from '../../types'
import { Link } from 'react-router-dom'

type Props = {}

const Exercises = (props: Props) => {
  const [courseWorkouts, setCourseWorkouts] = useState<IWorkout[]>([])

  const { data, isLoading, error } = useGetWorkoutListQuery({})

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectorSelectedCourse)
  const { workout } = course

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setWorkoutList(data))
      const workouts = workout.map(workoutId => data[workoutId.trim()])
      setCourseWorkouts(workouts)
      console.log('workouts', workouts)
    }
  }, [data, error, isLoading, workout, dispatch])

  const handleLessonClick = (workout: IWorkout) => {
    dispatch(setLessonData(workout))
  }

  console.log('workouts', courseWorkouts)
  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          {courseWorkouts.map((workout, index) => {
            return (
              <Link to="/lesson" onClick={() => handleLessonClick(workout)}>
                <S.ChooseBtn key={index}>
                  <S.BtnTextBox>
                    <S.ChooseBtnHeader>{workout.name}</S.ChooseBtnHeader>
                    <S.ChooseBtnParagraph>
                      {workout.course} / {workout.number} день
                    </S.ChooseBtnParagraph>
                  </S.BtnTextBox>
                </S.ChooseBtn>
              </Link>
            )
          })}
        </S.ExercisesBox>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default Exercises
