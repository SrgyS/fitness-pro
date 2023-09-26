import styled from "styled-components";

export const CourseDirectionsWrapper = styled.ul`
  margin-left: 30px;
  margin-top: 22px;
  display: flex;
  max-height: 96px;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 575px) {
    max-height: 100%;
  }
`;
