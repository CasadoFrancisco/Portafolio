import React, { useState } from "react";
import styled from "styled-components";
import LogoPortada from "../assets/LogoPortafolio.jpeg";

const NavbarContainer = styled.div`
  @media (max-width: 1000px) {
    background-color: #0077b6;
    display: flex;
    flex-direction: row;
    height: 110px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  }
  /* @media (max-width: 800px) {
    background-color: #0077b6;
    display: flex;
    flex-direction: row;
    height: 110px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
  } */
  background-color: #0077b6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 500px;
  font-family: "Inconsolata", monospace;
  font-size: 23px;
  font-weight: bold;
  position: fixed;
  z-index: 99999;
`;
const NavbarContainerImg = styled.div`
  
  @media (max-width: 1000px) {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
  
    margin-top: 100px;
  
`;
const NavbarImg = styled.img`
  /* @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  } */
  @media (max-width: 1000px) {
    width: 72px;
    height: 70px;
    border-radius: 50%;
  }
  @media (min-width: 801px) {
    width: 280px;
    height: 280px;
    border-radius: 50%;
  }
`;
const NavbarContainerLinks = styled.div<{ isOpen: boolean }>`
  @media (max-width: 1000px) {
    position: absolute;
    background-color: #0077b6;
    top: ${(props) => (props.isOpen ? "0vh" : "-100vh")};
    width: 100%;
    height: 520px;
    display: flex;
    flex-direction: column;
    transition: 1s;
    margin-top: 0;
  }
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
  
`;

const NavbarLinks = styled.a`
  @media (max-width: 1000px) {
    text-decoration: none;
    margin-bottom: 15px;
    color: #caf0f8;
    font-family: "Inconsolata", monospace;
    border-radius: 30px;
    transition: 1s;
    height: 40px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
    color: #caf0f8;

    &:hover {
      background-color: #ffba08;
      color: #0077b6;
    }
  }
  
    margin-bottom: 15px;
    color: #caf0f8;
    text-decoration: none;
    height: 40px;
    font-size: 25px;
    font-weight: 800;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: 1s;
    &:hover {
      background-color: #ffba08;
      color: #0077b6;
    }
  
`;

const ContainerTitulo = styled.div`
  /* @media (max-width: 400px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  } */
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 55%;
  }
 
    display: none;
  
`;
const TituleUno = styled.h2`
  /* @media (max-width: 400px) {
    font-family: "Inconsolata", monospace;
    font-weight: 900;
    font-size: 30px;
    color: #90e0ef;
  } */
  font-family: "Inconsolata", monospace;
  font-weight: 900;
  font-size: 38px;
  color: #90e0ef;
`;
const TituleDos = styled.h2`
  /* @media (max-width: 400px) {
    font-family: "Inconsolata", monospace;
    font-weight: 900;
    font-size: 30px;
    color: #ffba08;
  } */
  font-family: "Inconsolata", monospace;
  font-weight: 900;
  font-size: 38px;
  color: #ffba08;
`;
const Label = styled.label`
  @media (min-width: 1000px) {
    display: none;
  }
  & {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    margin-right: 20px;
  }

  & input {
    display: none;
  }

  & span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  & span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  & span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  & input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  & input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  & input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

export const NavbarComponent: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <NavbarContainer>
      <NavbarContainerImg>
        <NavbarImg src={LogoPortada} alt="LogoPortada" />
      </NavbarContainerImg>
      <NavbarContainerLinks isOpen={isOpen}>
        <NavbarLinks href="#inicio">Inicio</NavbarLinks>
        <NavbarLinks href="#sobremi">Sobre mi</NavbarLinks>
        <NavbarLinks href="#portafolio">Portafolio</NavbarLinks>
        <NavbarLinks href="#educacion">Educacion</NavbarLinks>
        <NavbarLinks href="#skills">Skills</NavbarLinks>
        <NavbarLinks href="#contacto">Contacto</NavbarLinks>
      </NavbarContainerLinks>
      <ContainerTitulo>
        <TituleUno>Porta</TituleUno>
        <TituleDos>folio</TituleDos>
      </ContainerTitulo>
      <Label htmlFor="burger">
        <input id="burger" type="checkbox" onClick={handleMenu} />
        <span></span>
        <span></span>
        <span></span>
      </Label>
    </NavbarContainer>
  );
};
