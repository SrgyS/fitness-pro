import styled from 'styled-components'

export const CourseDescriptionPage = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  padding-bottom: 95px;
  padding-top: 30px;
  @media (max-width: 1161px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  section {
    margin-top: 75px;
  }

  @media (max-width: 426px) {
    body {
      font-size: 20px;
    }
    section {
      margin-top: 40px;
    }
  }
`
