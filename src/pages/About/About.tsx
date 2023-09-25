import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
  const { courseName } = useParams()

  return <div>About {courseName}</div>
}

export default About
