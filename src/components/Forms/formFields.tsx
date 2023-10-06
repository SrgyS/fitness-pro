import { Input } from './form.styled'
import { FormField } from './form.styled'

export function Form(props: any) {
  const { fields } = props
  const formFields = fields.map((field: any, index: number) => (
    <div key={index}>
      <label>{field.label}</label>
      <Input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
      />
    </div>
  ))

  return <FormField>{formFields}</FormField>
}

export const formData = {
  AuthFormLogIn: {
    fields: [
      { type: 'text', name: 'field1', placeholder: 'Логин' },
      { type: 'email', name: 'field2', placeholder: 'Пароль' },
    ],
  },
  ProgressForm: {
    fields: [
      { type: 'text', name: 'fieldA', placeholder: 'Введите значение' }, 
    ],
  },
  ChangePassWordForm: {
    fields: [
      { type: 'text', name: 'fieldA', placeholder: 'Пароль' },
      { type: 'text', name: 'fieldA', placeholder: 'Повторите пароль' }
    ],
  },
  ChangeLoginForm: {
    fields: [
      { type: 'text', name: 'fieldA', placeholder: 'Логин' },
    ],
  },
  AuthFormRegister: {
    fields: [
      { type: 'text', name: 'field1', placeholder: 'Логин' },
      { type: 'email', name: 'field2', placeholder: 'Пароль' },
      { type: 'email', name: 'field2', placeholder: 'Повторите пароль' },
    ],
  },
}
