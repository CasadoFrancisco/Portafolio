import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./page/Home";

export const AppRoutes: React.FC<{}> = () => {
  return <>
  <Routes>
    <Route path="/" element ={<HomeComponent/>}/>
  </Routes>
  </>;
};
