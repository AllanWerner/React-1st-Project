import React from "react";
import Intro from "../div/intro";
import TitleBloc from "./title_bloc";

const Div = ({ children }) => {
  return <div>{children}</div>;
};

Div.Intro = Intro;
Div.TitleBloc = TitleBloc;

export default Div;
