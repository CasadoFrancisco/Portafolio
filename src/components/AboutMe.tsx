import React from "react";
import styled from "styled-components";

export const AboutMeComponent: React.FC<{}> = () => {
  return (
    <ContainerAbout id="sobremi">
      <ContainerTitle>
        <Title>Sobre mi</Title>
      </ContainerTitle>
      <ContainerParrafoUno>
        <Parrafouno>
          Hace más de 10 años que comencé mi carrera laboral, pero la pandemia
          me hizo reflexionar sobre mis objetivos y decidí tomar un camino
          diferente. En noviembre del 2022, tomé la valentía de dejar todo atrás
          y comencé a estudiar programación, con el objetivo de convertirme en
          un desarrollador de front-end.
        </Parrafouno>
        <ParrafoDos>
          Ahora, estoy emocionado de estar en busca de mi primer trabajo en este
          nuevo campo. Estoy seguro de que mi dedicación y pasión por la
          tecnología me permitirán tener éxito en este camino.
        </ParrafoDos>
      </ContainerParrafoUno>
      <ContainerParrafoDos>
        <ParrafoTres>
          Actualmente, estoy estudiando de manera autónoma y en un grupo de
          estudio, lo que me ha permitido trabajar tanto en proyectos
          individuales como en equipo, y actualmente estoy en busca de mi primer
          trabajo como desarrollaor web
        </ParrafoTres>
      </ContainerParrafoDos>
    </ContainerAbout>
  );
};

const ContainerAbout = styled.div`
  background-color: #023e8a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-family: "Inconsolata", monospace;
  margin-left: 450px;
  padding-left: 50px;
  padding-right: 90px;
  padding-top: 20px;
  min-height: 100vh;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #023e8a;
    font-family: "Inconsolata", monospace;
    margin-left: 0;
    padding-left: 50px;
    padding-bottom: 40px;
  }
  @media (max-width: 500px) {
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
  }
`;
const Title = styled.h1`
  font-size: 120px;
  color: #90e0ef;
  @media (max-width: 1000px) {
    font-size: 100px;
  }

  @media (max-width: 500px) {
    font-size: 80px;
  }
`;
const ContainerParrafoUno = styled.div`
  flex-direction: column;
  display: flex;
`;
const Parrafouno = styled.p`
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: white;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;
const ParrafoDos = styled.p`
  font-size: 30px;
  margin-top: 50px;
  font-weight: 700;
  color: white;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;
const ContainerParrafoDos = styled.div`
  display: flex;
  flex-direction: column;
`;
const ParrafoTres = styled.p`
  font-size: 30px;
  color: #90e0ef;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;
