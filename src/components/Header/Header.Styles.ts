import styled from 'styled-components'
interface UserNameProps {
  $textColor?: string
}

interface ArrowProps {
  $isVisible: boolean
}

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  gap: 20px;
  flex-wrap: wrap;
`
export const UserLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(217, 217, 217, 1);
`
export const UserEnter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  cursor: pointer;
  align-items: center;
`
export const UserName = styled.div<UserNameProps>`
  align-self: center;
  color: ${props => props.$textColor || '#fff'};
`
export const UserIcon = styled.div`
  align-self: center;
  width: 15px;
  height: 10px;
`
export const Arrow = styled.div<ArrowProps>`
  width: 8px;
  height: 8px;
  border-right: 2px solid ${props => props.color || 'black'};
  border-bottom: 2px solid ${props => props.color || 'black'};
  transform: ${props =>
    props.$isVisible
      ? 'rotate(225deg) translateY(-2px) translateX(-2px)'
      : 'rotate(45deg)'};
`
