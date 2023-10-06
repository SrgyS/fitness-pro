import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IFormData } from '../../types'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

type Props = {}

const Auth = (props: Props) => {
  const handleLogin = (formData: IFormData) => {
    const auth = getAuth()

    signInWithEmailAndPassword(auth, formData.login, formData.password)
      .then((userCredential) => {
        console.log(userCredential)
        console.log(formData)
      })
      .catch(console.error)
  }
  const dispatch = useAppDispatch()

  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <Form
            fields={formData.AuthFormLogIn.fields}
            title="Вход"
            onSubmit={handleLogin}
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
