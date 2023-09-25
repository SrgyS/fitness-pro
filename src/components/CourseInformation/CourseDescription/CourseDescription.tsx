import React, { FC } from "react";
import { ICourse } from "../../../types";

const CourseDescription: FC<Pick<ICourse, "description">> = ({
  description,
}) => {
  return <section>{description}</section>;
};

export default CourseDescription;
