import { useState } from 'react'
import { Input } from './form.styled'
import { FormField, LoginButton } from './form.styled'
import { IFormData, IFormProps, IFormField } from '../../types'
import { StyledError } from './form.styled'

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

type FormErrors = {
  [key: string]: string
}

export function Form(props: IFormProps) {
  const { fields, onSubmit, buttonText, errorMessage } = props

  const InitialFormData: IFormData = {}
  const [formDataInput, setFormDataInput] = useState<IFormData>(InitialFormData)
  const [error, setError] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormDataInput({ ...formDataInput, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fieldErrors: FormErrors = {}

    fields.forEach(field => {
      if (!formDataInput[field.name]) {
        fieldErrors[field.name] = `Заполните ${field.name}`
      }
    })
    if (Object.keys(fieldErrors).length > 0) {
      setError(fieldErrors)
      return
    }

    if (onSubmit) {
      onSubmit(formDataInput)
      setError({})
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
      {error && error[field.name] && (
        <StyledError>{error[field.name]}</StyledError>
      )}
    </div>
  ))

  return (
    <FormField onSubmit={handleSubmit}>
      {formFields}
      {errorMessage && <StyledError>{errorMessage}</StyledError>}
      <LoginButton type="submit">{buttonText}</LoginButton>
    </FormField>
  )
}
