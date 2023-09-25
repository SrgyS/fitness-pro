import { FC } from "react";
import { ICourse } from "../../../types";
import * as S from "./CourseDirections.style";
import { Title } from "../../Title/Title.style";
import { link } from "fs";

const CourseDirections: FC<Pick<ICourse, "directions">> = ({ directions }) => {
  return (
    <section>
      <Title>Направления:</Title>
      <S.CourseDirectionsWrapper>
        {directions.map((direction) => (
          <li key={direction}>{direction}</li>
        ))}
      </S.CourseDirectionsWrapper>
    </section>
  );
};

export default CourseDirections;
