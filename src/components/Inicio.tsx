import React from "react";
import styled from "styled-components";

const ContainerInicio = styled.div`
    font-family: "Inconsolata", monospace;
background-color:#023E8A ;
height:100vh;
width: 100vw;
`;
const ContainerName = styled.div`
background-color: red;
display: flex;
align-content: center;
justify-content: center;
padding-top: 17%;
padding-right: 30%;


`;
const NameOne = styled.h1``;
const NameTwo = styled.h1``;
const ContainerBienvenido = styled.div``
const ContainerIfYouLike = styled.div``;
const ContainerButton = styled.div``;

export const InicioComponent :React.FC<{}> = ()=>{
    return (
        <ContainerInicio>
            <ContainerName>
                <NameOne>Francisco </NameOne>
                <NameTwo>Casado</NameTwo>
            </ContainerName>
            <ContainerBienvenido>

            </ContainerBienvenido>
            <ContainerIfYouLike>

            </ContainerIfYouLike>
            <ContainerButton>

            </ContainerButton>
        </ContainerInicio>

    )
}