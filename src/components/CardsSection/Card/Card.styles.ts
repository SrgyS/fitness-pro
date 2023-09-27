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
