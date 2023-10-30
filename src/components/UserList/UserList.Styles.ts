import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
`
export const Profile = styled.p`
  font-size: 48px;
`
export const UserInfo = styled.p`
  font-size: 24px;
`
export const UserInfoButton = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
export const UserButton = styled.button`
  background-color: rgba(88, 14, 162, 1);
  width: 275px;
  height: 52px;
  border-radius: 46px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
    background: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`
