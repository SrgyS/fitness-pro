import { useEffect } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectorWorkoutList } from '../../store/selectors/exerciseSelector'
import { useGetExerciseListQuery } from '../../store/services/exerciseService'
import { setWorkoutList } from '../../store/slices/exerciseSlice'
import { IWorkout } from '../../types'

import * as S from './Exercises.styled'
import ExercisesBox from './ExercisesBox'
import { useDispatch } from 'react-redux'


type Props = {}

const Exercises = (props: Props) => {
  const { data, isLoading, error } = useGetExerciseListQuery({})
  const workoutList = useAppSelector(selectorWorkoutList)
  console.log(workoutList)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setWorkoutList(data))
    }
  }, [data, error, isLoading, dispatch])

  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        {data.map((workouts: IWorkout, index: number) => (
          <ExercisesBox 
          key={index}
          text={workouts.name}
          />
        ))}
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default Exercises
