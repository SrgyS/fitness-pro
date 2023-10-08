import { Link } from 'react-router-dom'
import { Form, formData } from '../../../components/Forms/formFields'
import Logo from '../../../components/Logo/Logo'
import * as S from '../Auth.styles'

type Props = {}

const ChangePassword = (props: Props) => {
  return (
    <S.AuthPageContainer>
      <S.LoginFormContainer>
        <Logo textColor="black" />
        <S.Inputs>
          <S.Description>Новый пароль:</S.Description>
          <Form
            fields={formData.ChangePassWordForm.fields}
            title="Изменить пароль"
            buttonText="Сохранить"
          />
        </S.Inputs>
        <S.LoginButton type="submit">Сохранить</S.LoginButton>
      </S.LoginFormContainer>
    </S.AuthPageContainer>
  )
}

export default ChangePassword
