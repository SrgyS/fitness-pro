import React, { useState } from 'react'
import * as S from './Bid.style'
import svgUrl from '../../assets/img/bid.svg'
import { Button } from '../Button/Button.style'
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
} from 'firebase/auth'
import { useParams } from 'react-router-dom'
import { get, getDatabase, ref, set } from 'firebase/database'
import { StyledError } from '../Forms/form.styled'
import { useAuth } from '../../hooks/useAuth'

const Bid = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isDisabled, setDisabled] = useState(false)
  const { id } = useParams()
  const auth = getAuth()

  const { email, password } = useAuth()

  const handleAddCourse = async (id: string | undefined) => {
    try {
      setError('')
      setSuccess('')
      setDisabled(true)

      const user = await auth.currentUser

      if (!user) {
        setError('Авторизуйтесь для добавления курса')
        setDisabled(false)
        return
      }

      if (!id) {
        console.error('courseId is undefined or empty.')
        setError('Курс не найден')
        setDisabled(false)
        return
      }

      if (!email) {
        setError('Отсутствует email')
        setDisabled(false)
        return
      }
      if (password !== null) {
        const credentials = EmailAuthProvider.credential(email, password)

        try {
          await reauthenticateWithCredential(user, credentials)
        } catch (reauthError) {
          setError('Ошибка реаутентификации')
          setDisabled(false)
          return
        }
      }
      const db = getDatabase()
      const userCoursesRef = ref(db, `users/${user.uid}/courses`)

      const snapshot = await get(userCoursesRef)

      const currentCourses = snapshot.val() || []

      if (currentCourses.includes(id)) {
        setError('Этот курс уже добавлен')
      } else {
        currentCourses.push(id)
        await set(userCoursesRef, currentCourses)
        setSuccess('Курс успешно добавлен')
      }
    } catch (error) {
      console.error(error)
      setError('Ошибка при добавлении курса')
    }

    setDisabled(false)
  }

  return (
    <S.BidContainer>
      <S.SignUp>
        <p>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <Button
          style={{ marginTop: '46px' }}
          onClick={() => handleAddCourse(id)}
          disabled={isDisabled}
        >
          Записаться на тренировку
        </Button>
        {error && <StyledError>{error}</StyledError>}
        {success && <S.StyledSuccess>{success}</S.StyledSuccess>}
      </S.SignUp>
      <S.BidImg alt="Рука с телефоном" src={svgUrl} />
    </S.BidContainer>
  )
}

export default Bid
