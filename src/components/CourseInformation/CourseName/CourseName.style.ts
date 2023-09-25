import styled from "styled-components";

export const CourseNameContainer = styled.section`
  border-radius: 30px;
  margin-top: 27px;
  font-size: 64px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
  position: relative;
  @media (max-width: 426px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const CourseNameImage = styled.img`
  z-index: -1;
  width: 100%;
`;

export const CourseName = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  @media (max-width: 400px) {
    top: 10px;
  }
`;
