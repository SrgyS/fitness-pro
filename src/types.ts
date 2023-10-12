export interface ICourse {
  id: string
  name: string
  desires: string[]
  directions: string[]
  description: string
}

export interface IFormField {
  type: string
  name: string
  placeholder: string
}
export interface IFormData {
  [key: string]: string
}

export interface IFormProps {
  fields: IFormField[]
  onSubmit?: (formData: IFormData) => void
  title?: string
  buttonText: string
  errorMessage?: string
}
