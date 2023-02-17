import React, { useCallback } from "react";
import styled from "styled-components";

const ContainerInicio = styled.div`
  font-family: "Inconsolata", monospace;
  background-color: #023e8a;
  height: 100vh;
  margin-left: 450px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #023e8a;
    width: 100%;
    font-family: "Inconsolata", monospace;
    margin-left: 0;
    padding-left: 0;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-top: 140px;
    align-items: center;
    justify-content: center;
    background-color: #023e8a;
    width: 100%;
    font-family: "Inconsolata", monospace;
  }
`;
const ContainerName = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    padding-top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 1280px) {
    margin-top: 1px;
  }
  @media (max-widt: 1590px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const NameOne = styled.h1`
  font-size: 130px;
  color: #90e0ef;
  width: 55%;
  margin-right: 40px;

  @media (max-width: 1180px) {
    font-size: 90px;
    width: 80%;
  }
  @media (max-width: 1000px) {
    color: #90e0ef;
    font-size: 60px;
    width: 100%;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const NameTwo = styled.h1`
  font-size: 130px;
  color: #ffba08;
  width: 400px;

  @media (max-width: 1138px) {
    font-size: 90px;
    height: 50%;
    width: 100%;
  }
  @media (max-width: 1000px) {
    color: #ffba08;
    font-size: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ContainerBienvenido = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 1613px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
  }
`;
const ParrafoOne = styled.p`
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: #90e0ef;
  display: flex;
  align-items: center;
  justify-content: ce;
  @media (max-width: 1093px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    margin-top: 10px;
    
  }
`;
const ParrafoTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 41px;
  margin-left: 20px;
  height: 100%;
  

  width: 330px;
  @media (max-width: 1613px) {
    margin-top: 30px;
  }
  @media (max-width: 1000px) {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  
    height:100%;
  }
`;
const Img = styled.img``;

const ContainerIfYouLike = styled.div`
  flex-direction: column;
  display: flex;

  width: 40vw;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
  }
`;
const ParrafoEmail = styled.p`
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: #90e0ef;
  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 700;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    padding-top: 50px;
  }
`;
const Email = styled.p`
  color: #0096c7;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 1090px) {
    width: 85%;
    font-size: 30px;
  }
  @media (max-width: 1135px) {
    font-size: 27px;
  }
  @media (max-width: 1000px) {
    color: #0096c7;
    font-size: 21px;
    font-weight: 900;
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ContainerIconInicio = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: row;

    margin-bottom: 20px;
    height: 60px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const ContainerIcon = styled.div`
  background-color: #03045e;
  border-radius: 90%;
  height: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-top: 30px;

  .icono {
    font-size: 30px;
    color: white;
  }
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.button`
  @media (max-width: 1000px) {
    margin-top: 20px;
    font-size: 17px;
    margin-bottom: 50px;
    position: relative;
  }

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
  @media (max-width: 1000px) {
  }
`;
const ContainerButton = styled.div`
  height: 150px;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InicioComponent: React.FC = () => {
  const handleClick = useCallback(() => {
    window.open("https://resume.io/r/nuUzdquTb", "_blank");
  }, []);
  return (
    <ContainerInicio id="inicio">
      <ContainerName>
        <NameOne>Francisco </NameOne>
        <NameTwo>Casado</NameTwo>
      </ContainerName>
      <ContainerBienvenido>
        <ParrafoOne>Bienvenido/a a mi Portafolio como desarrollador</ParrafoOne>
        <ParrafoTwo>
          <Img
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
      <ContainerButton>
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
      </ContainerButton>
    </ContainerInicio>
  );
};
