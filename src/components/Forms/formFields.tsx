import { useState } from 'react'
import { Input } from './form.styled'
import { FormField, LoginButton } from './form.styled'
import { IFormData, IFormProps, IFormField } from '../../types'

export function Form(props: IFormProps) {
  const { fields, onSubmit } = props

  const [formData, setFormData] = useState<IFormData>({})
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log('change')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.login || !formData.password) {
      setError('Заполните поля')
      return
    }
    const { login, password } = formData

    if (!login.trim() || !password.trim()) {
      setError('Введите логин и пароль')
      return
    }
    if (onSubmit) {
      onSubmit(formData)
    }
  }
  const formFields = fields.map((field: IFormField, index: number) => (
    <div key={index}>
      <Input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        onChange={handleChange}
      />
    </div>
  ))

  return (
    <FormField onSubmit={handleSubmit}>
      {formFields}
      {error && <p>{error}</p>}
      <LoginButton type="submit">Отправить</LoginButton>
    </FormField>
  )
}

export const formData = {
  AuthFormLogIn: {
    fields: [
      { type: 'text', name: 'login', placeholder: 'Логин' },
      { type: 'password', name: 'password', placeholder: 'Пароль' },
    ],
  },
  ProgressForm: {
    fields: [{ type: 'text', name: 'fieldA', placeholder: 'Введите значение' }],
  },
  ChangePassWordForm: {
    fields: [
      { type: 'password', name: 'password', placeholder: 'Пароль' },
      {
        type: 'password',
        name: 'password-repeat',
        placeholder: 'Повторите пароль',
      },
    ],
  },
  ChangeLoginForm: {
    fields: [{ type: 'text', name: 'login', placeholder: 'Логин' }],
  },
  AuthFormRegister: {
    fields: [
      { type: 'text', name: 'login', placeholder: 'Логин' },
      { type: 'password', name: 'password', placeholder: 'Пароль' },
      {
        type: 'password',
        name: 'password-repeat',
        placeholder: 'Повторите пароль',
      },
    ],
  },
}
