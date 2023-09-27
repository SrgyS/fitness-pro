import * as S from './Progress.styled'
import { Form, formData } from '../../components/Forms/formFields'

type Props = {}

const TrainProgress = (props: Props) => {
  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
        <S.Inputs>
          <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
          <Form fields={formData.ProgressForm.fields} title="Прогресс" />
          <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
          <Form fields={formData.ProgressForm.fields} title="Прогресс" />
          <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
          <Form fields={formData.ProgressForm.fields} title="Прогресс" />
          <S.Description>Сколько раз вы сделали наклоны вперед?</S.Description>
          <Form fields={formData.ProgressForm.fields} title="Прогресс" />
        </S.Inputs>
        <S.SendButton type="submit">Отправить</S.SendButton>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default TrainProgress
