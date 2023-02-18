import React from "react";
import styled from "styled-components";
import { AboutMeComponent } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";
import { EducationComponent } from "../components/Educacion";
import { InicioComponent } from "../components/Inicio";
import { NavbarComponent } from "../components/Navbar";
import { ProyectComponent } from "../components/Proyect";
import { SkillsComponent } from "../components/Skills";





export const HomeComponent:React.FC<{}> = () =>{
    return(
       <Container>
        <NavbarComponent/>
        <InicioComponent/>
        <AboutMeComponent/>
        <ProyectComponent/>
        <EducationComponent/>
        <SkillsComponent/>
        <ContactMe/>
       </Container>
        
      
        
       
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`;