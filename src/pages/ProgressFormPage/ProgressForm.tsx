import { useEffect, useState } from 'react'
import * as S from './Progress.styled'

// import { useAuth } from '../../hooks/useAuth'
import { selectorPracticeData } from '../../store/selectors/courseSelector'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import { getProgressPercentage } from '../../components/utils/utils'
import { setPracticeData } from '../../store/slices/courseSlice'
import { useParams } from 'react-router-dom'

type Props = {}

const TrainProgress = (props: Props) => {
  const [progressState, setProgressState] = useState<{ [key: string]: number }>(
    {},
  )
  const { id } = useParams()
  console.log('ID', id)
  const dispatch = useAppDispatch()
  const handleChange = (name: string, value: number) => {
    setProgressState(prevProgress => ({
      ...prevProgress,
      [name]: value,
    }))
  }

  const data = useAppSelector(selectorPracticeData)

  const practiceData = id ? data[id] : []
  console.log('PD', practiceData)

  // const { id } = useAuth()

  const handleSubmit = () => {
    const updatedData = practiceData.map(data => {
      const currentRepetitions = progressState[data.name]
      console.log('currentRepetitions', currentRepetitions)
      const progress = getProgressPercentage(currentRepetitions, data.amount)
      console.log('progress', progress)
      return { ...data, progress }
    })
    const idString = id ? id.toString() : '0'
    console.log('data progress', updatedData)

    dispatch(setPracticeData({ id: idString, practiceData: updatedData }))
  }

  // const userCoursesRef = ref(getDatabase(), `users/${id}/courses`)

  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        {practiceData.map((practice, index) => (
          <S.Inputs key={index}>
            <S.Description>
              Сколько раз вы сделали {practice.name}?
            </S.Description>
            <S.ExerciseInput
              onChange={e =>
                handleChange(practice.name, parseInt(e.target.value, 10))
              }
              placeholder="Введите значение"
              name={practice.name}
            />
          </S.Inputs>
        ))}

        <S.SendButton type="submit" onClick={handleSubmit}>
          Отправить
        </S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
