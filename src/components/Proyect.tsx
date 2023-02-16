import React, { useCallback } from "react";
import styled from "styled-components";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import material from "../assets/material.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png"
import styledComponent from "../assets/styledComponent.png";
import ts from "../assets/ts.png";
import news from "../assets/news.png";
import innovation from "../assets/innovation.png";
import rym from "../assets/RyM.png";
import figma from "../assets/figma.png";

export const ProyectComponent: React.FC<{}> = () => {
  const handleClick = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  return (
    <ContainerProyect id="portafolio">
      <Titule>Portafolio</Titule>
      <ContainerPortafolio>
        <ContainerPortafolioIndividual>
          <ImgPortafolio src={rym} />
          <ContainerInfoPortafolio>
            <TitlePortafolio>Rick and Morty app</TitlePortafolio>
            <InfoPortafolio>
              Ultimo proyecto donde aprendi typescript y redux.
            </InfoPortafolio>
            <ContainerIconPortafolio>
              <IconImg src={ts} />
              <IconImg src={redux}/>
              <IconImg src={react} />
              <IconImg src={material} />
            </ContainerIconPortafolio>
            <Button
              className="learn-more"
              onClick={() =>
                handleClick("https://typescript-reactjs.vercel.app/")
              }
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Proyect</span>
            </Button>
          </ContainerInfoPortafolio>
        </ContainerPortafolioIndividual>
        <ContainerPortafolioIndividual>
          <ImgPortafolio src={news} />
          <ContainerInfoPortafolio>
            <TitlePortafolio>Portal Noticias</TitlePortafolio>
            <InfoPortafolio>
              Sitio desarrollado con ideas grupales, y solitario.
            </InfoPortafolio>
            <ContainerIconPortafolio>
              <IconImg src={react} />
              <IconImg src={js} />
              <IconImg src={css} />
              <IconImg src={html} />
            </ContainerIconPortafolio>
            <Button
              className="learn-more"
              onClick={() =>
                handleClick("https://blog-app-react-lac.vercel.app/")
              }
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Proyect</span>
            </Button>
          </ContainerInfoPortafolio>
        </ContainerPortafolioIndividual>
        <ContainerPortafolioIndividual>
          <ImgPortafolio src={innovation} />
          <ContainerInfoPortafolio>
            <TitlePortafolio>Primero Proyercto con figma</TitlePortafolio>
            <InfoPortafolio>
              proyecto grupal y terminado en el mismo dia %100 responsive.
            </InfoPortafolio>
            <ContainerIconPortafolio>
              <IconImg src={react} />
              <IconImg src={styledComponent} />
              <IconImg src={js} />
              <IconImg src={figma} />
            </ContainerIconPortafolio>
            <Button className="learn-more" onClick={()=>handleClick("https://innovation-pi.vercel.app/")}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Proyect</span>
            </Button>
          </ContainerInfoPortafolio>
        </ContainerPortafolioIndividual>
      </ContainerPortafolio>
    </ContainerProyect>
  );
};

const ContainerProyect = styled.div`
  margin-left: 450px;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 50px;
  font-family: "Inconsolata", monospace;
  flex-direction: column;
  background-color: #023e8a;
  padding-top: 20px;
  padding-right: 10px;
  @media(max-width:1100px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media(max-width:1000px){
    margin-left: 0;
    padding-top: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    @media(max-width:700px){
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
  
  
`;
const Titule = styled.h1`
  color: #90e0ef;
  font-size: 100px;
  display: flex;
  @media(max-width:1120px){
    font-size: 90px;
  }
  @media(max-width:1000px){
   margin-bottom: 20px;
   margin-top: 20px; 
  }
  @media(max-width:700px){
    font-size: 60px;
  }
`;
const ContainerPortafolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media(max-width:1000px){
   height: 100%;
   width: 100%;
   align-items: center;
   justify-content: center;
   }
   @media(max-width:700px){
   
  }
  
`;
const ContainerPortafolioIndividual = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
  
  @media(max-width:1120px){
    align-items: center;
    justify-content: center;
   flex-direction: column;
  }
  @media(max-width:1000px){
  flex-direction: row;

 display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  }
`;
const ImgPortafolio = styled.img`
  height: 200px;
  width: 400px;
  border-radius: 15px;
  @media(max-width:1300px){
    height: 150px;
    width: 300px;
  }
  @media(max-width:1120px){
    height: 200px;
    width: 400px;
  }
  @media(max-width:700px){
   height: 150px;
   width: 290px;
  }
`;
const ContainerInfoPortafolio = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  background-color: #0077b6;
  margin-left: 10px;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  @media(max-width:1120px){
    display: flex;
    align-items: center;
    width: 82%;
    margin-top: 10px;
    padding-bottom: 10px;
  }
  @media(max-width:1000px){
   margin-top: 0;
   padding-bottom: 0;
   height: 200px;
  }
  @media(max-width:700px){
   margin-left: 0; 
  }
`;
const IconImg = styled.img`
  height: 40px;
  color: black;
  margin-right: 15px;
`;
const TitlePortafolio = styled.h3`
  color: #ffba08;
  font-size: 20px;
`;
const InfoPortafolio = styled.p`
  color: white;
`;
const ContainerIconPortafolio = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  & {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: 20px;
    font-family: "Inconsolata", monospace;
    
  }
  &.learn-more {
    width: 9rem;
    height: auto;
  }

  &.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #ffba08;
    border-radius: 1.625rem;
  }

  &.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  &.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  &.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  &.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.45rem 0;
    margin: 0 0 0 1.85rem;
    color: white;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
  }

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    color: #fff;
  }
`;
