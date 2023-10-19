import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { useGetWorkoutListQuery } from '../../store/services/courseService'
import {
  setSelectedWorkout,
  setWorkoutList,
} from '../../store/slices/courseSlice'
import * as S from './Exercises.styled'
import {
  selectorSelectedCourse,
} from '../../store/selectors/courseSelector'
import { IPopupMenuContext, IWorkout } from '../../types'
import { useNavigate } from 'react-router-dom'

const ExercisesModal = ({ active, setActive }: IPopupMenuContext) => {
  const navigate = useNavigate()
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
