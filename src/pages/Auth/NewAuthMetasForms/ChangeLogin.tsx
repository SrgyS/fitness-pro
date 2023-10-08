import { Link } from 'react-router-dom'
import { Form, formData } from '../../../components/Forms/formFields'
import Logo from '../../../components/Logo/Logo'
import * as S from '../Auth.styles'

type Props = {}

const ChangeLogin = (props: Props) => {
  return (
    <S.AuthPageContainer>
      <S.ChangeLoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <S.Description>Новый логин:</S.Description>
          <Form
            fields={formData.ChangeLoginForm.fields}
            title="Изменить пароль"
            buttonText="Сохранить"
          />
        </S.Inputs>
        <S.LoginButton type="submit">Сохранить</S.LoginButton>
      </S.ChangeLoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default ChangeLogin
