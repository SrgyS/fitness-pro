import React, { FC } from "react";
import * as S from "./CourseDesire.style";

const CourseDesire: FC<{ desire: string; index: number }> = ({
  desire,
  index,
}) => {
  return (
    <S.CourseDesire>
      <S.CourseDesireCircle>{index}</S.CourseDesireCircle>
      <S.CourseDesireText>{desire}</S.CourseDesireText>
    </S.CourseDesire>
  );
};

export default CourseDesire;
