import styled from 'styled-components'

export const Input = styled.input`
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
export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`
