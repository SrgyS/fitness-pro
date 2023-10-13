import * as S from './Exercises.styled'

type Props = {}

const Exercises = (props: Props) => {
  return (
    <S.ProgressPageContainer>
      <S.ProgressFormBox>
        <S.ProgressHeader>Выберите тренировку</S.ProgressHeader>
        <S.ExercisesBox>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Утренняя практика</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 1 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Красота и здоровье</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 2 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Асаны стоя</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 3 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Растягиваем мышцы бедра</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 4 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Гибкость спины</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 5 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Растягиваем мышцы бедра</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 1 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
          <S.ChooseBtn>
            <S.BtnTextBox>
              <S.ChooseBtnHeader>Утренняя практика</S.ChooseBtnHeader>
              <S.ChooseBtnParagraph>
                Йога на каждый день / 1 день
              </S.ChooseBtnParagraph>
            </S.BtnTextBox>
          </S.ChooseBtn>
        </S.ExercisesBox>
      </S.ProgressFormBox>
    </S.ProgressPageContainer>
  )
}

export default Exercises
