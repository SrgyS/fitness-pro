import styled from 'styled-components'

export const SuccessPopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  pointer-events: none;
  overflow: hidden;
`

export const SuccessPopupText = styled.div`
  max-width: 268px;
  max-height: 96px;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
`
export const SuccessImg = styled.img`
  display: block;
  height: 254px;
`
export const SuccessPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  max-width: 444px;
  height: 360px;
  background-color: #ffffff;
  padding-top: 41px;
  padding-right: 88px;
  padding-left: 88px;
`
