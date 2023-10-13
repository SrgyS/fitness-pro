import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { IFormData } from '../../types'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import { setUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type Props = {}

const Register = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = async (formData: IFormData) => {
    const auth = getAuth()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.login,
        formData.password,
      )
      const user = userCredential.user

      if (user) {
        const token = await user.getIdToken()
        console.log(user)

        const db = getDatabase()
        const userRef = ref(db, 'users/' + user.uid)
        const userData = {
          email: user.email,
          id: user.uid,
        }
        await set(userRef, userData)

        dispatch(
          setUser({
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
            fields={formData.AuthFormRegister.fields}
            title="Регистрация"
            onSubmit={handleRegister}
            buttonText="Зарегистрироваться"
            errorMessage={errorMessage}
          />
        </S.Inputs>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Register
