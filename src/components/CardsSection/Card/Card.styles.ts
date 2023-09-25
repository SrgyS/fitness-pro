import styled from 'styled-components'
interface styledCardProps {
  imgUrl?: string
}

export const Card = styled.div<styledCardProps>`
  width: 360px;
  height: 480px;
  overflow: hidden;
  border-radius: 30px;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  & span {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 36px;
    font-weight: 700;
  }
`
