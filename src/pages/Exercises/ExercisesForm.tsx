import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { useGetWorkoutListQuery } from '../../store/services/courseService'
import { setWorkoutList } from '../../store/slices/courseSlice'
import * as S from './Exercises.styled'
import { selectorSelectedCourse } from '../../store/selectors/courseSelector'
import { IPopupMenuContext, IWorkout } from '../../types'
import { Link } from 'react-router-dom'

const ExercisesModal = ({ active, setActive }: IPopupMenuContext) => {
  const [courseWorkouts, setCourseWorkouts] = useState<IWorkout[]>([])

  const { data, isLoading, error } = useGetWorkoutListQuery({})
  // const [getWorkout]=useLazyGetWorkoutListQuery()

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectorSelectedCourse)
  // Если course существует, используем workout, иначе пустой массив.
  const workout = useMemo(() => course?.workout || [], [course])

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setWorkoutList(data))
      const workouts = workout.map(workoutId => data[workoutId.trim()])
      setCourseWorkouts(workouts)
      console.log('workouts', workouts)
    }
  }, [data, error, isLoading, workout, dispatch])

  // const handleLessonClick = (workout: IWorkout) => {
  //   dispatch(setLessonData(workout))
  // }

  console.log('workouts', courseWorkouts)
  return (
    <S.ProgressPageContainer
      className={active ? 'active' : ''}
      onClick={() => setActive(false)}
    >
      <S.ProgressFormBox onClick={e => e.stopPropagation()}>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          {courseWorkouts.map((workout, index) => {
            return (
              <Link
                to={`/lesson/${workout.id}`}
                // onClick={() => handleLessonClick(workout)}
              >
                <S.ChooseBtn key={index}>
                  <S.BtnTextBox>
                    <S.ChooseBtnHeader>{workout.name}</S.ChooseBtnHeader>
                    <S.ChooseBtnParagraph>
                      {workout.course} / день {workout.number}
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

export default ExercisesModal
