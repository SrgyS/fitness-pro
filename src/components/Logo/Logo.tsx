import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import * as S from "./Logo.style";
import logo from "../../assets/images/logo.svg";

const Logo: FC = () => {
  return (
    <NavLink to="/">
      <S.Logo alt="SkyFitnessPro" src={logo} />
    </NavLink>
  );
};

export default Logo;
