import React, { FC } from "react";
import * as S from "./Title.style";

const Title: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
