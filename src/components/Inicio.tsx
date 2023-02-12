import React, { useCallback } from "react";
import styled from "styled-components";

const ContainerInicio = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding-top: 110px;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #023e8a;
    height: 100%;
    font-family: "Inconsolata", monospace;
    margin-left: 0;
  }
  font-family: "Inconsolata", monospace;
  background-color: #023e8a;
  height: 100vh;
  margin-left: 500px;
`;
const ContainerName = styled.div`
  @media (max-width: 1000px) {
   
    padding-left: 10%;
    padding-top: 40px;
   
  }

  display: flex;
  align-content: center;
  justify-content: flex-start;
  padding-top: 17%;
  
flex-wrap: wrap;
`;
const NameOne = styled.h1`
  @media (max-width: 1000px) {
    color: #90e0ef;
    margin-left: 0;
    background-color: red;
  }
   @media (max-width: 1138px) {
    font-size: 100px;
  } 
  margin-left: 40px;
  font-size: 130px;
  color: #90e0ef;
  width: 570px;
  margin-right: 10px;
`;
const NameTwo = styled.h1`
  @media (max-width: 1000px) {
    font-size: 65px;
    color: #ffba08;
    margin-left: 0;
  }
  @media (max-width: 1138px) {
    font-size: 100px;
  }
  margin-left: 40px;
  font-size: 130px;
  color: #ffba08;
  width: 420px;
`;
const ContainerBienvenido = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
    display: flex;
    margin-top: 10px;
    width: 300px;
    align-items: center;
    justify-content: flex-start;
    height: 200px;
    margin-left: 14%;
  }

  @media (max-width: 1613px) {
    display: flex;
    flex-direction: column;
  }
  flex-direction: row;
  display: flex;
  margin-left: 45px;
`;
const ParrafoOne = styled.p`
  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 700;
    color: white;
    display: flex;

    flex-direction: column;
  }

  @media (max-width: 1093px) {
    width: 500px;
  }
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: #90e0ef;
`;
const ParrafoTwo = styled.a`
  @media (max-width: 1000px) {
    margin-right: 50px;
    font-weight: 500;
    width: 250px;
  }
  @media (max-width: 1613px) {
    margin-top: 30px;
    padding-left: 0;
  }
  margin-top: 35px;
  padding-left: 15px;
  width: 330px;
`;

const ContainerIfYouLike = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin-left: 10px;
  }
  flex-direction: column;
  display: flex;
  padding-left: 45px;
  width: 40vw;
`;
const ParrafoEmail = styled.p`
  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 700;
    color: white;
    width: 300px;
    height: 40%;
    margin-left: 150px;
  }
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: #90e0ef;
`;
const Email = styled.p`
  @media (max-width: 1000px) {
    color: #0096c7;
    font-size: 23px;
    font-weight: 900;
    margin-left: 116px;
    margin-top: 10px;
  }
  @media (max-width: 1087px) {
    width: 500px;
    font-size: 30px;
  }
  color: #0096c7;
  font-size: 35px;
  font-weight: 700;
`;
const ContainerIconInicio = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 20px;
    height: 60px;
    width: 90%;

    align-items: center;
    justify-content: center;
  }
  display: flex;
  flex-direction: row;
  margin-left: 45px;
`;

const ContainerIcon = styled.div`
  @media (max-width: 1000px) {
  }
  background-color: #03045e;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-top: 30px;

  .icono {
    font-size: 40px;
    color: white;
  }
`;
const Button = styled.button`
  @media (max-width: 1000px) {
    margin-right: 100px;
    font-size: 17px;
    margin-bottom: 40px;
  }
  margin-top: 50px;
  margin-left: 50px;
  display: block;
  padding: 0.7em 1em;
  background: transparent;
  outline: none;
  border: 0;
  color: #d4af37;
  letter-spacing: 0.1em;
  font-family: monospace;
  font-size: 25px;
  font-weight: bold;
  z-index: 1;
  position: relative;
  transition: all 0.5s;

  & .bg-top {
    position: absolute;
    height: 10px;
    background: #d4af37;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    transition: all 0.4s;

    & .bg-inner {
      bottom: 0;
    }
  }

  & .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: #d4af37;
    transition: all 0.4s;
  }

  & .bg-right {
    position: absolute;
    background: #d4af37;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    transition: all 0.4s;

    & .bg-inner {
      left: 0;
    }
  }

  & .bg-inner {
    background: #28282d;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
  }

  & .text {
    position: relative;
    transition: all 0.4s;
  }

  &:hover .bg-inner {
    background: #d4af37;
    transition: all 0.4s;
  }

  &:hover .text {
    color: #28282d;
    transition: all 0.4s;
  }

  &:hover .bg-right,
  &:hover .bg,
  &:hover .bg-top {
    background: #28282d;
  }

  &:active {
    z-index: 9999;
    animation: bounce 0.1s linear;
  }
`;

export const InicioComponent: React.FC = () => {
  const handleClick = useCallback(() => {
    window.open("https://resume.io/r/nuUzdquTb", "_blank");
  }, []);
  return (
    <ContainerInicio>
      <ContainerName>
        <NameOne>Francisco </NameOne>
        <NameTwo>Casado</NameTwo>
      </ContainerName>
      <ContainerBienvenido>
        <ParrafoOne>Bienvenido/a a mi Portafolio como desarrollador</ParrafoOne>
        <ParrafoTwo>
          <img
            src="https://readme-typing-svg.demolab.com?font=Inconsolata&size=50&weight=600&width=270&pause=1000&color=02C39A&vCenter=true&lines=Frontend.."
            alt="Typing SVG"
          />
        </ParrafoTwo>
      </ContainerBienvenido>
      <ContainerIfYouLike>
        <ParrafoEmail>
          Si te gusto el portafolio y te queres contactar conmigo escribeme a:{" "}
        </ParrafoEmail>
        <Email>casadofranciscoromero@gmail.com</Email>
      </ContainerIfYouLike>
      <ContainerIconInicio>
        <ContainerIcon>
          <a href="https://github.com/CasadoFrancisco" target="_blank">
            <i className="icono fa-brands fa-github"></i>
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <a
            href="https://www.linkedin.com/in/francisco-casado-romero-283b17239/"
            target="_blank"
          >
            <i className="icono fa-brands fa-linkedin"></i>
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <a
            href="https://www.figma.com/files/user/1200544370569511728?fuid=1200544370569511728"
            target="_blank"
          >
            <i className="icono fa-brands fa-figma"></i>
          </a>
        </ContainerIcon>
      </ContainerIconInicio>

      <Button
        type="button"
        className="btn cube cube-hover"
        onClick={handleClick}
      >
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">Click para ver cv</div>
      </Button>
    </ContainerInicio>
  );
};
