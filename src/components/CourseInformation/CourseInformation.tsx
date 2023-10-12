import React, { FC, useEffect } from 'react'
import CourseName from './CourseName/CourseName'
import CourseDirections from './CourseDirections/CourseDirections'
import CourseDescription from './CourseDescription/CourseDescription'
import { useAppSelector } from '../../store/hooks/useAppHook'
import { selectorSelectedCourse } from '../../store/selectors/courseSelector'

const CourseInformation: FC = () => {
  const course = useAppSelector(selectorSelectedCourse)
  const { name, description, directions } = course

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <CourseName name={name} />
      <CourseDirections directions={directions} />
      <CourseDescription description={description} />
    </>
  )
}

export default CourseInformation
