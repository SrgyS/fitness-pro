import React, { FC } from "react";
import { ICourse } from "../../types";
import CourseName from "./CourseName/CourseName";
import CourseDesires from "./CourseDesires/CourseDesires";
import CourseDirections from "./CourseDirections/CourseDirections";
import CourseDescription from "./CourseDescription/CourseDescription";

const CourseInformation: FC<ICourse> = ({
  id,
  name,
  desires,
  directions,
  description,
}) => {
  return (
    <>
      <CourseName name={name} />
      <CourseDesires desires={desires} />
      <CourseDirections directions={directions} />
      <CourseDescription description={description} />
    </>
  );
};

export default CourseInformation;
