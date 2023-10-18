import styled from 'styled-components'
interface ExerciseProgressProps {
  readonly borderColor: string
}

interface ExerciseCompletionProps {
  readonly fillColor: string

  readonly fillProgress: string
}
export const ExerciseProgress = styled.div<ExerciseProgressProps>`
  border: 2px solid #000000;
  border-radius: 22px;
  width: 100%;
  height: 36px;
  ${props => props.borderColor && `border-color : ${props.borderColor};`}
`

export const ExerciseCompletion = styled.div<ExerciseCompletionProps>`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #565eef;
  height: 100%;
  width: 45%;
  border-radius: 18px;
  color: white;
  ${props => props.fillColor && `background-color: ${props.fillColor};`}
  ${props => props.fillProgress && `width: ${props.fillProgress}%;`}
`
