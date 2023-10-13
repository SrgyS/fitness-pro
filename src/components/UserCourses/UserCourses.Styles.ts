import styled from 'styled-components'
import YogaLogo from '../../assets/img/prof-card-5.png'
import StretchingLogo from '../../assets/img/prof-card-3.png'
import BodyFlexLogo from '../../assets/img/prof-card-1.png'

export const UserCourse = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding-bottom: 615px;
gap:40px;
`
export const Yoga = styled.div`
background-image: url(${YogaLogo});
width: 360px;
height:480px;
background-size: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left:30px;
border-radius:30px;
box-shadow: -10px 5px 15px rgba(217, 217, 217, 1), 10px -5px 15px rgba(217, 217, 217, 1);
`

export const Stretching = styled.div`
background-image: url(${StretchingLogo});
width: 360px;
height:480px;
background-size: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left:30px;
border-radius:30px;
box-shadow: -10px 5px 15px rgba(217, 217, 217, 1), 10px -5px 15px rgba(217, 217, 217, 1);
`
export const BodyFlex = styled.div`
background-image: url(${BodyFlexLogo});
width: 360px;
height:480px;
background-size: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left:30px;
border-radius:30px;
box-shadow: -10px 5px 15px rgba(217, 217, 217, 1), 10px -5px 15px rgba(217, 217, 217, 1);
`

export const TextCourses = styled.p`
font-size: 36px;
`
export const UserCourseButton = styled.button`
background-color: rgba(199, 233, 87, 1);
width: 136px;
height: 43px;
color:rgba(0, 0, 0, 1);
border-radius: 80px;
font-size: 20px;
text-align: center;
margin-bottom: 27px;
text-decoration: none;
`
export const MyCourse = styled.p`
font-size: 48px;
`
