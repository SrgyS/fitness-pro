import React, { FC } from "react";
import { ICourse } from "../../../types";
import * as S from "./CourseDesires.style";
import CourseDesire from "./CourseDesire/CourseDesire";
import { Title } from "../../Title/Title.style";

const CourseDesires: FC<Pick<ICourse, "desires">> = ({ desires }) => {
  return (
    <section>
      <Title>Подойдет для вас, если:</Title>
      <S.CourseDesiresWrapper>
        {desires.map((desire, index) => (
          <CourseDesire key={desire} desire={desire} index={index + 1} />
        ))}
      </S.CourseDesiresWrapper>
    </section>
  );
};

export default CourseDesires;
