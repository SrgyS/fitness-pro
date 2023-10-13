import styled, { css } from 'styled-components'

const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  display: inline-block;
`

export const ProgressPageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #271a58;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProgressHeader = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin-top: 36px;
`

export const ProgressFormBox = styled.div`
  background-color: #ffffff;
  width: 444px;
  height: 554px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`
export const Inputs = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export const SendButton = styled.button`
  ${commonButtonStyles}
  width: 278px;
  height: 52px;
  margin-bottom: 44px;
  margin-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #d1cece;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
`

export const ExerciseInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`
