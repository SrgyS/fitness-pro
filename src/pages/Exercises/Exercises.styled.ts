import styled from 'styled-components'



export const ProgressPageContainer = styled.div`
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

export const ProgressFormBox = styled.div`
  background-color: #ffffff;
  width: 444px;
  height: 626px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  align-items: center;
`
export const ExercisesBox = styled.div`
  width: 302px;
  height: 452px;
  padding-left: 8px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
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
export const ChooseBtn = styled.button`
  position: relative;
  display: inline-block;
  width: 278px;
  border-radius: 26px;
  border: solid;
  border-width: 1px;
  border-color: black;
  background-color: #ffffff;
  cursor: pointer;
  padding-left: 27px;
  padding-right: 28px;
  font-weight: 400;
  transition: all 0.3s ease;
  &:hover {
    border-color: #06b16e;
    color: #06b16e;
  }
  &:active {
    background-color: #d1cece;
  }
`
export const BtnTextBox = styled.div`
  margin-bottom: 17.5px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`

export const ChooseBtnHeader = styled.div`
  font-size: 20px;
  padding-top: 11.5px;
`
export const ChooseBtnParagraph = styled.div`
  font-size: 15px;
`
export const CompleteImg = styled.img`
  width: 27px;
  height: 25px;
  position: absolute;
  top: 12.5px;
  right: 12px;
`
