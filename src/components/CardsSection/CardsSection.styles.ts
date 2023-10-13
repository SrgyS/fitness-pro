import styled from 'styled-components'

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  padding-bottom: 60px;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`
export const StyledError = styled.p`
  color: coral;
  font-size: 32px;
`
