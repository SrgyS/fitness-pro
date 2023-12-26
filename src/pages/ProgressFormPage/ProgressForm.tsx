import * as S from './Progress.styled'

import { IPractice } from '../../types'
import { useState } from 'react'

type Props = {
  practice: IPractice[]
  workoutId: string
  open: boolean
  handleOpen: () => void
  handleUpdate: (changes: IExercisesDone) => void
}

export interface IExercisesDone {
  [key: string]: number
}

const TrainProgress = (props: Props) => {
  const [exercisesDone, setExercisesDone] = useState<IExercisesDone>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const practiceId = e.target.name

    const practiceDone = Number(e.target.value)
    setExercisesDone(prev => ({ ...prev, [practiceId]: practiceDone }))
  }

  const handleClick = () => {
    const updatedExercisesDone: IExercisesDone = {}

    props.practice?.forEach(item => {
      const exerciseId = item.id
      const value = exercisesDone[exerciseId] || 0
      updatedExercisesDone[exerciseId] = value
    })

    props.handleUpdate(updatedExercisesDone)
  }

  return (
    <S.ProgressPageContainer
      onClick={props.handleOpen}
      className={props.open ? 'active' : ''}
    >
      <S.ProgressFormBox
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
        }}
        onClick={(e: React.FormEvent<HTMLFormElement>) => e.stopPropagation()}
      >
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        {props.practice?.map((item, index) => (
          <S.Inputs key={index}>
            <S.Description>Сколько раз вы сделали {item?.name}?</S.Description>
            <S.ExerciseInput
              type="number"
              name={item.id}
              value={exercisesDone[item.id] || ''}
              placeholder="Введите значение"
              onInput={handleChange}
            />
          </S.Inputs>
        ))}

        <S.SendButton onClick={handleClick}>Отправить</S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
