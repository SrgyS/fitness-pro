import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'

type Props = {}

const Auth = (props: Props) => {
  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <Form fields={formData.AuthFormLogIn.fields} title="Вход" />
        </S.Inputs>
        <S.LoginButton type="submit">Войти</S.LoginButton>
        <Link to="/register">
          <S.RegisterButton type="submit">Зарегистрироваться</S.RegisterButton>
        </Link>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Auth
