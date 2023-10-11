import { useNavigate } from 'react-router-dom'
import { Form, formData } from '../../../components/Forms/formFields'
import Logo from '../../../components/Logo/Logo'
import * as S from '../Auth.styles'
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'
import { IFormData } from '../../../types'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changePassword } from '../../../store/slices/userSlice'
import { useAuth } from '../../../hooks/useAuth'

type Props = {}

const ChangePassword = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const auth = getAuth()
  const dispatch = useDispatch()
  const user = auth.currentUser
  const navigate = useNavigate()
  const { password, email } = useAuth()

  const handleChangePassword = async (formData: IFormData) => {
    try {
      const newPassword = formData.password
      if (!user) {
        setErrorMessage('Пользователь не авторизован')
        return
      }
      if (email) {
        try {
          const credentials = EmailAuthProvider.credential(email, password)

          await reauthenticateWithCredential(user, credentials)

          await updatePassword(user, newPassword)

          dispatch(
            changePassword({
              password: newPassword,
            }),
          )
          setErrorMessage('')
          navigate('/user')
        } catch (error) {
          console.error(error)
          setErrorMessage('Ошибка при смене пароля')
        }
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Произошла ошибка')
    }
  }
  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <S.Description>Новый пароль:</S.Description>
          <Form
            fields={formData.ChangePassWordForm.fields}
            title="Изменить пароль"
            onSubmit={handleChangePassword}
            buttonText="Сохранить"
            errorMessage={errorMessage}
          />
        </S.Inputs>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default ChangePassword
