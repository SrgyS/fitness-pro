import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { IFormData } from '../../types'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'

type Props = {}

const Auth = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
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
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token,
          }),
        )
        navigate('/user')
      }
    } catch (error) {
      console.error(error)
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
