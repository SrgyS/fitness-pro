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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`

export const ProgressHeader = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`

export const ProgressFormBox = styled.form`
  box-shadow: lightgray 0px 0px 3px 1px;
  padding-top: 20px;
  padding-bottom: 20px;
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
  margin-left: 40px;
  margin-right: 40px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  &::-webkit-scrollbar {
    background: #d9d4d4;
    width: 5px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b3b1b1;
    width: 15px;
    border-radius: 10px;
  }
`
export const SendButton = styled.button`
  ${commonButtonStyles}
  width: 278px;
  height: 52px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  background-color: #580ea2;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #d1cece;
  }
`

export const Description = styled.label`
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
