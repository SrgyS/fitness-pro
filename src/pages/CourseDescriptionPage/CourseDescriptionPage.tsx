import * as S from './CourseDescription.style'
import Logo from '../../components/Logo/Logo'
import CourseInformation from '../../components/CourseInformation/CourseInformation'
import Bid from '../../components/Bid/Bid'
import { useAuth } from '../../hooks/useAuth'
import Header from '../../components/Header/Header'

const CourseDescription = () => {
  const { user, email } = useAuth()
  return (
    <S.CourseDescriptionPage>
      <Header user={user} name={email} />
      <CourseInformation />
      <Bid />
    </S.CourseDescriptionPage>
  )
}
export default CourseDescription
