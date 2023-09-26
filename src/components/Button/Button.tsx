import React, { FC } from "react";
import * as S from "./Button.style";

const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
