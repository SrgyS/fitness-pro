import styled, { css } from 'styled-components'

const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

export const AuthPageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #271a58;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginButton = styled.button`
  ${commonButtonStyles}
  width: 278px;
  height: 52px;
  margin-bottom: 20px;
  margin-top: 60px;

  color: white;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #d1cece;
  }
`

export const RegisterButton = styled.button`
  ${commonButtonStyles}
  width:278px;
  height: 52px;
  border: 1px solid #d0cece;

  background: #fff;
  &:hover {
    background-color: #d0cece;
  }
  &:active {
    background-color: #d0cece;
  }
`

export const LoginFormContainer = styled.div`
  background-color: #ffffff;
  width: 366px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 33px 47px 47px 41px;
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
  padding-top: 38px;
`

export const Description = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-bottom: 20px;
`

export const ChangeLoginFormContainer = styled.div`
  background-color: #ffffff;
  width: 366px;
  padding: 33px 47px 47px 41px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &button {
    margin-bottom: 0;
  }
`
