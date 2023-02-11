import React from "react";
import { InicioComponent } from "../components/Inicio";
import { NavbarComponent } from "../components/Navbar";




export const HomeComponent:React.FC<{}> = () =>{
    return(
       <>
        <NavbarComponent/>
        <InicioComponent/>
       </>
    )
}