import React from 'react'
import * as S from './SelectWorkout.styles'

type Props = {}

const SelectWorkout = (props: Props) => {
  return (
    <S.SelectWorkoutContainer>
      <S.SelectWorkoutTitle>Выберите тренировку</S.SelectWorkoutTitle>
    </S.SelectWorkoutContainer>
  )
}

export default SelectWorkout
