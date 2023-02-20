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
import mongo from "../assets/iconColor/mongo.png";
import sql from "../assets/iconColor/sql.png";
import node from "../assets/iconColor/node.png";
import express from "../assets/iconColor/express.png";
import { motion } from "framer-motion";

export const SkillsComponent: React.FC<{}> = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>

      <ContainerInfo>
        <Containerskills>
          <Text>Lenguajes de programacion</Text>
          <ContainerIcon>
            <Icon
              src={html}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={css}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={js}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={ts}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
          </ContainerIcon>
        </Containerskills>
        <Containerskills>
          <Text>Frameworks y sortware</Text>
          <ContainerIcon>
            <Icon
              src={react}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={redux}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={bootstrap}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={material}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
          </ContainerIcon>
        </Containerskills>
        <Containerskills>
          <Text>Herramientasy software</Text>
          <ContainerIcon>
            <Icon
              src={vs}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={git}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={github}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={figma}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={styledComponent}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
          </ContainerIcon>
        </Containerskills>
        <ContainerFuture>
          <SubtitleFuture>Estudios en curso</SubtitleFuture>
          <ContainerInfoFuture>
            <Icon
              src={node}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={mongo}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={express}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <Icon
              src={sql}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
          </ContainerInfoFuture>
        </ContainerFuture>
      </ContainerInfo>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 450px;
  padding-left: 40px;
  padding-top: 60px;
  min-height: 100vh;
  background-color: #023e8a;
  font-family: "Inconsolata", monospace;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin-left: 0;
    padding-top: 80px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;
    justify-content: center;
    padding-top: 110px;
  }
`;

const Title = styled.h1`
  color: #90e0ef;
  font-size: 100px;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`;

const ContainerInfo = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 30px;
  }
`;
const Containerskills = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
margin-top: 20px;
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
  }
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
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
const Icon = styled(motion.img)`
  height: 70px;
  margin-top: 30px;
  padding-right: 30px;
  @media (max-width: 700px) {
    height: 40px;
    margin-top: 0;

    padding-top: 30px;
  }
`;
const ContainerFuture = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`;
const SubtitleFuture = styled.h4`
  font-size: 35px;
  color: white;
  padding-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 27px;
  }
`;
const ContainerInfoFuture = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;
