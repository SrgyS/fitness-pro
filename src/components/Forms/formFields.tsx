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
  ChangePassWordForm: {
    fields: [
      { type: 'password', name: 'password', placeholder: 'Пароль' },
      {
        type: 'password',
        name: 'password-confirm',
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
        name: 'password-confirm',
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
  const [inputsData, setInputsData] = useState<IFormData>(InitialFormData)
  const [error, setError] = useState<FormErrors>({})
  const [isDisabled, setDisabled] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputsData({ ...inputsData, [name]: value })
    setError({})
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fieldErrors: FormErrors = {}

    fields.forEach(field => {
      if (!inputsData[field.name]) {
        fieldErrors[field.name] = `Заполните ${field.name}`
      }
    })
    if (
      inputsData['password'] &&
      inputsData['password-confirm'] &&
      inputsData['password'] !== inputsData['password-confirm']
    ) {
      fieldErrors['password-confirm'] = 'Пароли не совпадают'
    }

    if (Object.keys(fieldErrors).length > 0) {
      setError(fieldErrors)
      return
    }

    if (onSubmit) {
      setDisabled(true)
      try {
        await onSubmit(inputsData)
        setError({})
      } catch (error) {
        console.error(error)
      } finally {
        setDisabled(false)
      }
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
      <LoginButton disabled={isDisabled} type="submit">
        {buttonText}
      </LoginButton>
    </FormField>
  )
}
