import { useState } from 'react'
import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { IFormData } from '../../types'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/slices/userSlice'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async (formData: IFormData) => {
    const auth = getAuth()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.login,
        formData.password,
      )
      const user = userCredential.user

      if (user) {
        const token = await user.getIdToken()

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token,
            password: formData.password,
          }),
        )

        localStorage.setItem(
          'user',
          JSON.stringify({
            email: user.email,
            id: user.uid,
            token: token,
            password: formData.password,
          }),
        )
        navigate('/user')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        const firebaseError = error as Error
        console.error(firebaseError)
        setErrorMessage(firebaseError.message)
      } else {
        console.error('Неизвестная ошибка:', error)
      }
    }
  }
  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <Form
            fields={formData.AuthFormLogIn.fields}
            title="Вход"
            onSubmit={handleLogin}
            buttonText="Войти"
            errorMessage={errorMessage}
          />
        </S.Inputs>
        <Link to="/register">
          <S.RegisterButton type="submit">Зарегистрироваться</S.RegisterButton>
        </Link>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Auth
