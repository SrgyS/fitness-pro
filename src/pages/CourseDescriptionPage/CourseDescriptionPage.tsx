import * as S from './CourseDescription.style'
import Logo from '../../components/Logo/Logo'
import CourseInformation from '../../components/CourseInformation/CourseInformation'
import Bid from '../../components/Bid/Bid'

type Props = {}

const CourseDescription = (props: Props) => {
  return (
    <S.CourseDescriptionPage>
      <Logo textColor="black" />
      <CourseInformation />
      <Bid />
    </S.CourseDescriptionPage>
  )
}
export default CourseDescription
