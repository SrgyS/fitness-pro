import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { useGetWorkoutListQuery } from '../../store/services/courseService'
import { setWorkoutList } from '../../store/slices/courseSlice'
import * as S from './Exercises.styled'
import {
  selectorSelectedCourse,
} from '../../store/selectors/courseSelector'
import { IPopupMenuContext, IWorkout } from '../../types'

const ExercisesModal = ({active, setActive}: IPopupMenuContext) => {
  const [courseWorkouts, setCourseWorkouts] = useState<IWorkout[]>([])
console.log(courseWorkouts)

  const {
    data: workoutData,
    isLoading: isWorkoutLoading,
    error: workoutError,
  } = useGetWorkoutListQuery({})

  const dispatch = useAppDispatch()

  const course = useAppSelector(selectorSelectedCourse)
  const { workout } = course
  // const workoutList = useAppSelector(selectorWorkoutList)

  useEffect(() => {
    if (!isWorkoutLoading && !workoutError) {
      dispatch(setWorkoutList(workoutData))
      const workouts = workout?.map(workoutId => workoutData[workoutId])
      setCourseWorkouts(workouts)
    }
  }, [workoutData, workoutError, isWorkoutLoading, workout, dispatch])

  console.log('workouts', courseWorkouts)
  return (
    <S.ProgressPageContainer className={active ? "active" : ""} onClick={() => setActive(false)}>
      <S.ProgressFormBox onClick={e => e.stopPropagation()}> 
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          {
            courseWorkouts?.map(workout => {
              return (
                <S.ChooseBtn key={workout.id}>
                  <S.BtnTextBox>
                    <S.ChooseBtnHeader>{workout.name}</S.ChooseBtnHeader>
                    <S.ChooseBtnParagraph>{workout.course} / день {workout.number}</S.ChooseBtnParagraph>
                  </S.BtnTextBox>
                </S.ChooseBtn>
              )
            })
            // // <S.ChooseBtn>
            // //   <S.BtnTextBox>
            // //     <S.ChooseBtnHeader>test</S.ChooseBtnHeader>
            // //     <S.ChooseBtnParagraph>
            // //       Йога на каждый день / 1 день
            // //     </S.ChooseBtnParagraph>
            // //   </S.BtnTextBox>
            // // </S.ChooseBtn>
            // {/* <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Красота и здоровье</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 2 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn>
            // <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Асаны стоя</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 3 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn>
            // <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Растягиваем мышцы бедра</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 4 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn>
            // <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Гибкость спины</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 5 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn>
            // <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Растягиваем мышцы бедра</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 1 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn>
            // <S.ChooseBtn>
            //   <S.BtnTextBox>
            //     <S.ChooseBtnHeader>Утренняя практика</S.ChooseBtnHeader>
            //     <S.ChooseBtnParagraph>
            //       Йога на каждый день / 1 день
            //     </S.ChooseBtnParagraph>
            //   </S.BtnTextBox>
            // </S.ChooseBtn> */}
          }
        </S.ExercisesBox>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default ExercisesModal
