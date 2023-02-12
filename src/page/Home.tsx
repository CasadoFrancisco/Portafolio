import React from "react";
import styled from "styled-components";
import { InicioComponent } from "../components/Inicio";
import { NavbarComponent } from "../components/Navbar";





export const HomeComponent:React.FC<{}> = () =>{
    return(
       <>
        <NavbarComponent/>
        {/* <InicioComponent/> */}
      </>
        
       
    )
}