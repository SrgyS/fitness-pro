import * as S from './Progress.styled'

type Props = {}

const TrainProgress = (props: Props) => {
  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        <S.Inputs>
          <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
          <S.ExerciseInput
            name="forward bends"
            placeholder="Введите значение"
          />
          <S.Description>Сколько раз вы сделали наклоны назад?</S.Description>
          <S.ExerciseInput name="bends back" placeholder="Введите значение" />
          <S.Description>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </S.Description>
          <S.ExerciseInput name="leg raising" placeholder="Введите значение" />
        </S.Inputs>
        <S.SendButton type="submit">Отправить</S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
