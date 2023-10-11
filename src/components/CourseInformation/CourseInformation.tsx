import React, { FC } from 'react'
import CourseName from './CourseName/CourseName'

import CourseDirections from './CourseDirections/CourseDirections'
import CourseDescription from './CourseDescription/CourseDescription'
import { useAppSelector } from '../../store/hooks/useAppHook'
import { selectorSelectedCourse } from '../../store/selectors/courseSelector'

const CourseInformation: FC = () => {
  const course = useAppSelector(selectorSelectedCourse)
  const { name, description, directions } = course
  return (
    <>
      <CourseName name={name} />
      {/* <CourseDesires desires={desires} /> */}
      <CourseDirections directions={directions} />
      <CourseDescription description={description} />
    </>
  )
}

export default CourseInformation
