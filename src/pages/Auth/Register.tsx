import { Form, formData } from '../../components/Forms/formFields'
import * as S from './Auth.styles'
import Logo from '../../components/Logo/Logo'

type Props = {}

const Register = (props: Props) => {
  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <Form fields={formData.AuthFormRegister.fields} title="Регистрация" />
        </S.Inputs>
        <S.LoginButton type="submit">Зарегистрироваться</S.LoginButton>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default Register
