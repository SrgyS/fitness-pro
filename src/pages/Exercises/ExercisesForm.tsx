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
import completeUrl from '../../assets/img/done.png'

const ExercisesModal = ({ active, setActive }: IPopupMenuContext) => {
  const navigate = useNavigate()
  const progress = useAppSelector(selectorProgress)

  const [courseWorkouts, setCourseWorkouts] = useState<IWorkout[]>([])

  const {
    data: workoutData,
    isLoading: isWorkoutLoading,
    error: workoutError,
  } = useGetWorkoutListQuery({})

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectorSelectedCourse)

  const workout = useMemo(() => course?.workout || [], [course])
  const selectWorkout = (id: string) => {
    dispatch(setSelectedWorkout(id.trim()))
    navigate('/lesson')
  }

  useEffect(() => {
    if (!isWorkoutLoading && !workoutError) {
      const workoutDataArray = Object.values<IWorkout>(workoutData)
      const updatedWorkoutData = workoutDataArray.map((item: IWorkout) => {
        return {
          ...item,
          id: item.id.trim(),
        }
      })
      dispatch(setWorkoutList(updatedWorkoutData))

      const workouts = workout
        ?.map(workoutId =>
          updatedWorkoutData.find(item => item.id.trim() === workoutId),
        )
        ?.filter(item => {
          return item !== undefined
        }) as IWorkout[]
      setCourseWorkouts(workouts)
    }
  }, [workoutData, workoutError, isWorkoutLoading, workout, dispatch])

  const completeProgress = useMemo(() => {
    const progress: { [key: string]: number[] } = {}
    courseWorkouts.forEach(item => {
      if (item.practice) {
        const id = item.id.trim()
        const amountsArray = item.practice.map(exercise => exercise.amount)
        progress[id] = amountsArray
      } else {
        return
      }
    })
    return progress
  }, [courseWorkouts])

  const completedWorkouts: string[] = []

  // Итерируемся по ключам (ID) объекта `progress`
  for (const id in progress) {
    if (progress?.[id.trim()] && completeProgress[id.trim()]) {
      const progressArray = progress[id.trim()]
      const completeArray = completeProgress[id.trim()]

      if (Array.isArray(progressArray) && Array.isArray(completeArray)) {
        // Проверяем, что значения в `progress` больше или равны значениям в `complete`
        const isComplete = progressArray.every(
          (value, index) => value >= completeArray[index],
        )
        if (isComplete) {
          completedWorkouts.push(id.trim())
        }
      }
    }
  }

  return (
    <S.ProgressPageContainer
      className={active ? 'active' : ''}
      onClick={() => setActive(false)}
    >
      <S.ProgressFormBox
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          {courseWorkouts?.map(item => {
            const isCompleted = completedWorkouts.includes(item?.id)
            const borderStyle = isCompleted
              ? { border: '1px solid #06B16E', color: '#06B16E' }
              : {}
            return (
              <S.ChooseBtn
                style={borderStyle}
                key={item?.id}
                onClick={() => selectWorkout(item?.id.trim())}
              >
                {isCompleted && (
                  <S.CompleteImg
                    src={completeUrl}
                    alt="complete"
                  ></S.CompleteImg>
                )}
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
