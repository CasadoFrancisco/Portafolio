import React from "react";
import styled from "styled-components";
import bootstrap from "../assets/iconColor/bootstrap.png";
import css from "../assets/iconColor/css.png";
import figma from "../assets/iconColor/figma.png";
import git from "../assets/iconColor/git.png";
import github from "../assets/iconColor/github.png";
import html from "../assets/iconColor/html.png";
import js from "../assets/iconColor/js.png";
import material from "../assets/iconColor/material.png";
import react from "../assets/iconColor/react.png";
import redux from "../assets/iconColor/redux.png";
import styledComponent from "../assets/iconColor/styled.png";
import ts from "../assets/iconColor/ts.png";
import vs from "../assets/iconColor/vs.png";
import mongo from "../assets/iconColor/mongo.png"
import sql from "../assets/iconColor/sql.png"
import node from "../assets/iconColor/node.png"
import express from "../assets/iconColor/express.png"


export const SkillsComponent: React.FC<{}> = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>

      <ContainerInfo>
        <Containerskills>
          <Text>Lenguajes de programacion</Text>
          <ContainerIcon>
            <Icon src={html} />
          <Icon src={css} />
          <Icon src={js} />
          <Icon src={ts} />
          </ContainerIcon>
          
        </Containerskills>
        <Containerskills>
          <Text>Frameworks y sortware</Text>
          <ContainerIcon>
            <Icon src={react} />
          <Icon src={redux} />
          <Icon src={bootstrap} />
          <Icon src={material} />
          </ContainerIcon>
          
        </Containerskills>
        <Containerskills>
          <Text>Herramientasy software</Text>
          <ContainerIcon>
             <Icon src={vs} />
          <Icon src={git} />
          <Icon src={github} />
          <Icon src={figma} />
          <Icon src={styledComponent} />
          </ContainerIcon>
         
        </Containerskills>
        <ContainerFuture>
          <SubtitleFuture>Estudios en curso</SubtitleFuture>
          <ContainerInfoFuture>
            <Icon src={node}/>
            <Icon src={mongo}/>
            <Icon src={express}/>
            <Icon src={sql}/>
          </ContainerInfoFuture>
        </ContainerFuture>
      </ContainerInfo>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 450px;
  padding-left: 50px;
  padding-top: 60px;
  min-height: 100vh;
  background-color: #023e8a;
  font-family: "Inconsolata", monospace;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media(max-width:1000px){
    margin-left: 0;
    padding-top: 130px;
    align-items: center;
    justify-content: center;
  }
  @media(max-width:700px){
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    
  }
`;

const Title = styled.h1`
  color: #90e0ef;
  font-size: 100px;
  @media(max-width:700px){
    font-size: 70px;
  }
`;

const ContainerInfo = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media(max-width:1000px){
    align-items: center;
    justify-content: center;
  }
  @media(max-width:700px){
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const Containerskills = styled.div`
@media(max-width:1000px){
  width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
@media(max-width:700px){
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }


`;
const Text = styled.p`
  color: white;
  font-size: 35px;
  font-weight: 600;
  @media(max-width:700px){
   font-size: 27px;
  }
`;
const ContainerIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 100%;

`;
const Icon = styled.img`
  height: 70px;
  margin-top: 30px;
  padding-right: 30px;
  @media(max-width:700px){
   height: 40px; 
   margin-top: 0;

padding-top: 30px;}
`;
const ContainerFuture = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  @media(max-width:1000px){
  align-items: center;
  justify-content: center;
  }

`;
const SubtitleFuture = styled.h4`
  font-size: 35px;
  color: white;
  padding-bottom: 20px;
  @media(max-width:700px){
font-size: 27px;
  }
`;
const ContainerInfoFuture = styled.div`
align-items: center;
justify-content: center;
flex-direction: row;
display:flex;
@media(max-width:1000px){
  flex-direction: row;
}
`;

