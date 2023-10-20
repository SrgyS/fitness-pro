import React from 'react'
import CardsSection from '../../components/CardsSection/CardsSection'
// import { getDatabase, ref, get } from 'firebase/database'
// import { ICourseData } from '../../types'

type Props = { uid: string }

const UserCourses = (props: Props) => {
  const { uid } = props

  // const [userCourses, setUserCourses] = useState<string[]>([])
  // const [allCourses, setAllCourses] = useState<ICourseData>({})

  // useEffect(() => {
  //   const userRef = ref(getDatabase(), `users/${uid}`)
  //   console.log('userId:', uid)

  //   get(userRef)
  //     .then(snapshot => {
  //       if (snapshot.exists()) {
  //         const userData = snapshot.val()
  //         setUserCourses(userData.courses || [])
  //         console.log('userCourses', userData.courses)
  //       } else {
  //         setUserCourses([])
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Ошибка при получении данных пользователя:', error)
  //     })
  // }, [uid])

  // useEffect(() => {
  //   const coursesRef = ref(getDatabase(), 'courses')

  //   get(coursesRef)
  //     .then(snapshot => {
  //       if (snapshot.exists()) {
  //         const coursesData = snapshot.val()
  //         setAllCourses(coursesData || {})
  //         console.log('all courses', allCourses)
  //       } else {
  //         setAllCourses({})
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Ошибка при получении данных курсов:', error)
  //     })
  // }, [])

  // const availableCourses = userCourses.map(courseId => allCourses[courseId])

  // console.log('availibleCourse', availableCourses)

  return <CardsSection uid={uid} />
}

export default UserCourses
