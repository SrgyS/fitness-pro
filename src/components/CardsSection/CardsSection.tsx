import React, { useEffect, useState } from 'react'
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
import { getDatabase, ref, get } from 'firebase/database'
import { useLocation } from 'react-router-dom'
import ExercisesModal from '../../pages/Exercises/ExercisesForm'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
type Props = { uid: string }

const CardsSection = (props: Props) => {
  const { data, isLoading, error } = useGetCourseListQuery({})

  const [availableCourses, setAvailableCourses] = useState<ICourse[]>([])

  const courseList = useAppSelector(selectorCourseList)
  const dispatch = useAppDispatch()

  const { uid } = props
  const location = useLocation()

  //-----Получаем список курсов доступных юзеру-----//
  const [userCourses, setUserCourses] = useState<string[]>([])

  //----Стейт для поп-ап меню тренировок----//
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    const userCoursesRef = ref(getDatabase(), `users/${uid}/courses`)

    get(userCoursesRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const userCoursesList = snapshot.val()
          setUserCourses(userCoursesList || [])
          console.log('userCourses2', userCoursesList)
        } else {
          setUserCourses([])
        }
      })
      .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error)
      })
  }, [uid])

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setCourseList(data))
    }
  }, [data, error, isLoading, dispatch])

  useEffect(() => {
    // Фильтрация курсов доступных пользователю
    const filteredCourses = courseList.filter(course =>
      userCourses.includes(course.id.trim()),
    )
    setAvailableCourses(filteredCourses)
  }, [courseList, userCourses])

  const handleCard = (card: ICourse) => {
    dispatch(setSelectedCourse(card))
  }

  if (location.pathname === '/') {
    return (
      <S.CardsSection>
        {error && (
          <S.StyledError>
            Что-то пошло не так, проверьте подключение к интернету!
          </S.StyledError>
        )}
        <S.CardsWrapper>
          {courseList.map((card: ICourse, index: number) => (
            <Card
              key={index}
              text={card.name}
              imgUrl={require(
                `../../../src/assets/img/prof-card-${(index % 5) + 1}.png`,
              )}
              id={card.id}
              onClick={() => handleCard(card)}
              onClickPopUp={() => setModalActive(true)}
            />
          ))}
        </S.CardsWrapper>
        {!error && (
          <BigButtonMain onClick={scrollToTop}>Наверх &uarr;</BigButtonMain>
        )}
      </S.CardsSection>
    )
  } else if (location.pathname === '/user') {
    return (
      <S.CardsSection>
        {error && (
          <S.StyledError>
            Что-то пошло не так, проверьте подключение к интернету!
          </S.StyledError>
        )}
        <S.CardsWrapper>
          {availableCourses.length > 0 ? (
            availableCourses.map((card: ICourse, index: number) => (
              <Card
                key={index}
                text={card.name}
                imgUrl={require(
                  `../../../src/assets/img/prof-card-${(index % 5) + 1}.png`,
                )}
                id={card.id}
                onClick={() => handleCard(card)}
                shadow={true}
                onClickPopUp={() => setModalActive(true)}
              />
            ))
          ) : (
            <div>Нет доступных курсов.</div>
          )}
        </S.CardsWrapper>
        <ExercisesModal active={modalActive} setActive={setModalActive}/>
      </S.CardsSection>
    )
  } else {
    return <p>Нет доступных курсов</p>
  }
}

export default CardsSection
