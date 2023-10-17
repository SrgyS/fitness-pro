import { useState } from 'react'
import * as S from './Progress.styled'
import { IPractice } from '../../types'


type Props = {practice: IPractice[], workoutId: string}

const TrainProgress = (props: Props) => {
  const [exercisesDone, setExercisesDone] = useState({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const practiceId = e.target.name
    const practiceDone = e.target.value
    setExercisesDone(prev => ({ ...prev, [practiceId]: practiceDone }))
  }

  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        <S.Inputs>
          {props.practice.map((item, index) => {
            <>
              <S.Description>
                Сколько раз вы сделали {item?.name}?
              </S.Description>
              <S.ExerciseInput
                name={item.name}
                value={exercisesDone[index]}
                placeholder="Введите значение"
                onChange={handleChange}
              />
            </>
          })}
        </S.Inputs>
        <S.SendButton type="submit">Отправить</S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
