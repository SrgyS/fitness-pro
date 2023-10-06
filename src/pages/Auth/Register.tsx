import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { IFormData } from '../../types'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Register = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleRegister = (formData: IFormData) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(
      auth,
      formData.login,
      formData.password,
    ).then(({ user }) => {
      console.log(user)
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      )
      navigate('/')
    })
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
          />
        </S.Inputs>
        {/* <S.LoginButton type="submit">Зарегистрироваться</S.LoginButton> */}
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Register
