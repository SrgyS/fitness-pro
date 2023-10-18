import { useState } from 'react'
import * as S from './Progress.styled'
import { IPractice } from '../../types'

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
  console.log('propsPractice', props.practice)

  const handleClick = () => {
    props.handleUpdate(exercisesDone)
  }

  return (
    <S.ProgressPageContainer
      onClick={props.handleOpen}
      className={props.open ? 'active' : ''}
    >
      <S.ProgressFormBox
        onSubmit={e => {
          e.preventDefault()
        }}
        onClick={e => e.stopPropagation()}
      >
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        <S.Inputs>
          {props.practice?.map(item => (
            <>
              <S.Description>
                Сколько раз вы сделали {item?.name}?
              </S.Description>
              <S.ExerciseInput
                name={item.id}
                value={exercisesDone[item.id] || 0}
                placeholder="Введите значение"
                onInput={handleChange}
              />
            </>
          ))}
        </S.Inputs>
        <S.SendButton onClick={handleClick}>Отправить</S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
