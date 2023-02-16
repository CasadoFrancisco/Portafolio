import React from "react";
import styled from "styled-components";
import { AboutMeComponent } from "../components/AboutMe";
import { InicioComponent } from "../components/Inicio";
import { NavbarComponent } from "../components/Navbar";
import { ProyectComponent } from "../components/Proyect";





export const HomeComponent:React.FC<{}> = () =>{
    return(
       <Container>
        <NavbarComponent/>
        {/* <InicioComponent/>
        <AboutMeComponent/> */}
        <ProyectComponent/>
       </Container>
        
      
        
       
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`;