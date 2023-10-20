import styled from 'styled-components'
interface styledCardProps {
  $imgUrl?: string
}

export const Card = styled.div<styledCardProps>`
  width: 360px;
  height: 480px;
  overflow: hidden;
  border-radius: 30px;
  background-image: url(${props => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  &:hover {
    opacity: 0.9;
  }
  & span {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 36px;
    font-weight: 700;
    color: #000;
  }
  @media (max-width: 400px) {
    width: 300px;
  height: 400px;
`
export const CardWithShadow = styled(Card)`
  box-shadow:
    -10px 5px 15px rgba(217, 217, 217, 1),
    10px -5px 15px rgba(217, 217, 217, 1);
`
export const UserCourseButton = styled.button`
  background-color: rgba(199, 233, 87, 1);
  width: 136px;
  height: 43px;
  color: rgba(0, 0, 0, 1);
  border-radius: 80px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 27px;
  text-decoration: none;
  position: absolute;
  top: 410px;
  left: 30px;
  cursor: pointer;
  ::hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(199, 233, 87, 1);
  }
`
