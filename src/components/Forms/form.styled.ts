import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  &::placeholder {
    color: #d0cece;
  }
`
export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`
const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  display: inline-block;
`

export const LoginButton = styled.button`
  ${commonButtonStyles}
  width: 278px;
  height: 52px;
  margin-bottom: 20px;
  margin-top: 60px;
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
  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }
`
export const StyledError = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`
