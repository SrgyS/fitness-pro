import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectorWorkoutList } from '../../store/selectors/exerciseSelector'
import { useGetExerciseListQuery } from '../../store/services/exerciseService'
import { setWorkoutList } from '../../store/slices/exerciseSlice'
import { IPopupMenuContext, IWorkout } from '../../types'
import { getDatabase, ref, get } from 'firebase/database'
import * as S from './Exercises.styled'
import ExercisesBox from './ExercisesBox'
import { useDispatch } from 'react-redux'



const ExercisesModal = ({active, setActive}: IPopupMenuContext) => {

const {data, isLoading, error} = useGetExerciseListQuery({})
const dispatch = useAppDispatch()


const [workouts, setWorkouts] = useState<string[]>([])

useEffect(() => {
  const workoutsRef = ref(getDatabase())


  get(workoutsRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        const workoutsData = snapshot.val()
        setWorkouts(workoutsData.workout || [])
        console.log('workouts', workoutsData.workout)
      } else {
        setWorkouts([])
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных пользователя:', error)
    }) 
}, [])

const availableWorkouts = workouts.map(workoutId => data[workoutId])
console.log(availableWorkouts)

useEffect(() => {
  if (!isLoading && !error) {
    dispatch(setWorkoutList(data))
  }
}, [data, error, isLoading, dispatch])
  return (
    <S.ProgressPageContainer className={active ? "active" : ""} onClick={() => setActive(false)}>
      <S.ProgressFormBox onClick={e => e.stopPropagation()}>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        {/* {data.map((workouts: IWorkout, index: number) => ( */}
          <ExercisesBox 
          // key={index}
          // text={workouts.name}
          />
        {/* ))} */}
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default ExercisesModal
