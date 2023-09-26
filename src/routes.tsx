import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import CourseDescriptionPage from "./pages/CourseDescriptionPage/CourseDescriptionPage";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/course/:id" element={<CourseDescriptionPage />} />
    </Routes>
  );
};
