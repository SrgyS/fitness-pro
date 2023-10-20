import styled, { css } from 'styled-components'

const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  display: inline-block;
`

export const StyledSmallButton = styled.button`
  ${commonButtonStyles}
  padding: 5px 16px 7px;
  background-color: #140d40;
  font-size: 16px;
  line-height: 24px;
  color: #fff;

  &:hover {
    background-color: #2d1f79;
  }
  &:active {
    background-color: #3b29a1;
  }
`
export const BigButton = styled.button`
  ${commonButtonStyles}
  padding: 7px 24px 9px;
  background: #c7e957;

  font-size: 24px;

  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  background: #c7e957;

  &:hover {
    background-color: #daf289;
  }
  &:active {
    background-color: #ebffab;
  }
`
export const BigButtonMain = styled(BigButton)`
  margin-top: 34px;
  align-self: center;
`
export const BigButtonUser = styled(BigButton)`
  position: absolute;
  top: 410px;
  left: 30px;
  font-size: 20px;
`
