import React from 'react'
import * as S from './Lesson.style'
import { Button } from '../../components/Button/Button.style'
import Header from '../../components/Header/Header'
import { StyledMain } from '../Main/Main.styles'
import Image from '../../assets/img/temp-for-video.jpg'
import ExerciseProgress from '../../components/ProgressBar/ProgressBar'

type Props = {}

const Lesson = (props: Props) => {
  return (
    <StyledMain style={{ backgroundColor: '#FAFAFA', height: '100%' }}>
      <Header />
      <S.LessonContent>
        <S.LessonTitle> Йога</S.LessonTitle>
        <S.LessonPath>
          Красота и здоровье / Йога на каждый день / 2 день
        </S.LessonPath>
        <S.LessonVideoSection>
          <S.LessonVideo>
            <img src={Image} alt="" />
          </S.LessonVideo>
        </S.LessonVideoSection>
        <S.LessonDescription>
          <S.LessonExercises>
            <S.Exercises>
              <S.ExercisesTitle>Упражнения</S.ExercisesTitle>
              <S.ExercisesList>
                <S.Exercise>Наклон вперед (10 повторений)</S.Exercise>
                <S.Exercise>Наклон назад (10 повторений)</S.Exercise>
                <S.Exercise>
                  Поднятие ног, согнутых в коленях (5 повторений)
                </S.Exercise>
              </S.ExercisesList>
            </S.Exercises>
            <Button style={{ marginTop: '40px', marginBottom: '46px' }}>
              Заполнить свой прогресс
            </Button>
          </S.LessonExercises>
          <S.LessonProgress>
            <S.LessonProgressWrapper>
              <S.LessonProgressTitle>
                Мой прогресс по тренировке 2:
              </S.LessonProgressTitle>
              <S.ProgressContainer>
                <S.ExercisesDone>
                  <S.ExerciseName>Наклон вперед</S.ExerciseName>
                  <S.ExerciseName>Наклон назад</S.ExerciseName>
                  <S.ExerciseName>
                    Поднятие ног, согнутых в коленях
                  </S.ExerciseName>
                </S.ExercisesDone>
                <S.ExerciseBox>
                  <ExerciseProgress fillProgress="45" fillColor="#565EEF" />
                  <ExerciseProgress fillProgress="45" fillColor="#FF6D00" />
                  <ExerciseProgress fillProgress="45" fillColor="#9A48F1" />
                </S.ExerciseBox>
              </S.ProgressContainer>
            </S.LessonProgressWrapper>
          </S.LessonProgress>
        </S.LessonDescription>
      </S.LessonContent>
    </StyledMain>
  )
}

export default Lesson
