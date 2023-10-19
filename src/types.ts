import { Dispatch, SetStateAction } from 'react'

export interface ICourse {
  id: string
  name: string
  desires: string[]
  directions: string[]
  description: string
  workout: string[]
}

export interface IPopupMenuContext {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
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
export interface ICourseData {
  [courseId: string]: {
    [key: string]: string
  }
}
export interface IWorkout {
  id: string
  author: string
  course: string
  name: string[]
  number: string
  video: string
  practice: IPractice[]
}

export interface IPractice {
  id: string
  name: string
  amount: number
}
