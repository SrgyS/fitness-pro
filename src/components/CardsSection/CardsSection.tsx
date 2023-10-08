import React, { useEffect } from 'react'
import * as S from './CardsSection.styles'
import { BigButtonMain } from '../Buttons/MainButtons/Button.styles'
import Card from './Card/Card'
import { ICourse } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHook'
import {
  setCourseList,
  setSelectedCourse,
} from '../../store/slices/courseSlice'
import { selectorCourseList } from '../../store/selectors/courseSelector'
import { useGetCourseListQuery } from '../../store/services/courseService'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const CardsSection = () => {
  const { data, isLoading, error } = useGetCourseListQuery({})
  const courseList = useAppSelector(selectorCourseList)
  const dispatch = useAppDispatch()
  console.log(courseList)
  
  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setCourseList(data))
    }
  }, [data, error, isLoading, dispatch])

  const handleCard = (card: ICourse) => {
    dispatch(setSelectedCourse(card))
  }

  return (
    <S.CardsSection>
      <S.CardsWrapper>
        {courseList.map((card: ICourse, index: number) => (
          <Card
            key={index}
            text={card.name}
            imgUrl={require(`../../../src/assets/img/prof-card-${(index + 1) % 5}.png`)}
            id={card._id}
            onClick={() => handleCard(card)}
          />
        ))}
      </S.CardsWrapper>
      <BigButtonMain onClick={scrollToTop}>Наверх &uarr;</BigButtonMain>
    </S.CardsSection>
  )
}

export default CardsSection
