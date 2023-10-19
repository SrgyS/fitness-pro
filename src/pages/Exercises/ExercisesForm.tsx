import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { useGetWorkoutListQuery } from '../../store/services/courseService'
import {
  setSelectedWorkout,
  setWorkoutList,
} from '../../store/slices/courseSlice'
import * as S from './Exercises.styled'
import {
  selectorProgress,
  selectorSelectedCourse,
} from '../../store/selectors/courseSelector'
import { IPopupMenuContext, IWorkout } from '../../types'
import { useNavigate } from 'react-router-dom'

const ExercisesModal = ({ active, setActive }: IPopupMenuContext) => {
  // const [completedWorkouts, setCompletedWorkouts] = useState<string[]>([])
  const navigate = useNavigate()
  const progress = useAppSelector(selectorProgress)
  console.log('progressTraining', progress)

  const [courseWorkouts, setCourseWorkouts] = useState<IWorkout[]>([])
  console.log('courseWorkouts', courseWorkouts)

  const {
    data: workoutData,
    isLoading: isWorkoutLoading,
    error: workoutError,
  } = useGetWorkoutListQuery({})

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectorSelectedCourse)

  const workout = useMemo(() => course?.workout || [], [course])
  const selectWorkout = (id: string) => {
    dispatch(setSelectedWorkout(id))
    navigate('/lesson')
  }

  console.log('progressTraining', progress, 'selectedWorkout')

  useEffect(() => {
    if (!isWorkoutLoading && !workoutError) {
      dispatch(setWorkoutList(workoutData))
      console.log('useeffect')
      console.log('workout', workout)
      const workouts = workout
        ?.map(workoutId => workoutData[workoutId])
        ?.filter(item => {
          console.log('dfgd', item)
          return item !== undefined
        })
      setCourseWorkouts(workouts)
    }
  }, [workoutData, workoutError, isWorkoutLoading, workout, dispatch])

  // // Создаем пустой объект, который будет содержать ID и массивы значений amount
  // const completeProgress: { [key: string]: number[] } = {}

  // // Итерируемся по каждому объекту в исходном массиве
  // courseWorkouts.forEach(item => {
  //   const id = item.id
  //   const amountsArray = item.practice.map(exercise => exercise.amount)
  //   completeProgress[id] = amountsArray
  // })

  // console.log('res', completeProgress)

  // const result: string[] = []

  // // Итерируемся по ключам (ID) объекта `progress`
  // for (const id in progress) {
  //   if (progress.hasOwnProperty(id) && completeProgress[id]) {
  //     const progressArray = progress[id]
  //     const completeArray = completeProgress[id]
  //     console.log('arr2', progressArray, completeArray)

  //     if (Array.isArray(progressArray) && Array.isArray(completeArray)) {
  //       // Проверяем, что значения в `progress` больше или равны значениям в `complete`
  //       const isComplete = progressArray.every(
  //         (value, index) => value >= completeArray[index],
  //       )
  //       if (isComplete) {
  //         console.log('id', id)
  //         result.push(id)
  //       }
  //     }
  //   }
  // }

  // console.log('completeArr', result)

  console.log('workouts', courseWorkouts)
  return (
    <S.ProgressPageContainer
      className={active ? 'active' : ''}
      onClick={() => setActive(false)}
    >
      <S.ProgressFormBox onClick={e => e.stopPropagation()}>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          {courseWorkouts?.map(item => {
            return (
              <S.ChooseBtn
                key={item?.id}
                onClick={() => selectWorkout(item?.id)}
              >
                <S.BtnTextBox>
                  <S.ChooseBtnHeader>{item?.name}</S.ChooseBtnHeader>
                  <S.ChooseBtnParagraph>
                    {item?.course} / день {item?.number}
                  </S.ChooseBtnParagraph>
                </S.BtnTextBox>
              </S.ChooseBtn>
            )
          })}
        </S.ExercisesBox>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default ExercisesModal
