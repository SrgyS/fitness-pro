import React from 'react'
import * as S from './ProgressBar.style'

type Props = { fillProgress: string; fillColor: string }

const ExerciseProgress = (props: Props) => {
  return (
    <S.ExerciseProgress borderColor={props.fillColor}>
      <S.ExerciseCompletion
        fillColor={props.fillColor}
        fillProgress={props.fillProgress}
      >
        {props.fillProgress}%
      </S.ExerciseCompletion>
    </S.ExerciseProgress>
  )
}

export default ExerciseProgress
