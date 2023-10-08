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
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token,
          }),
        )
        navigate('/')
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
            fields={formData.AuthFormRegister.fields}
            title="Регистрация"
            onSubmit={handleRegister}
            buttonText="Зарегистрироваться"
          />
        </S.Inputs>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Register
