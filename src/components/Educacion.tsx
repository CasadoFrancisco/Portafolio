import React, { useCallback } from "react";
import styled from "styled-components";

export const EducationComponent: React.FC<{}> = () => {
  const handleClick = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  return (
    <Container id="educacion">
      <TitleEducation>Educacion</TitleEducation>
      <ContainerEducation>
        <Autodidacta>Autodidacta</Autodidacta>
        <Date>Noviembre 2022 - Presente</Date>
      </ContainerEducation>
      <ContainerCertificate>
        <ContainerCertificateInd>
          <Certificate>
            HTML y CSS{" "}
            <ButtonCertfificate
              onClick={() =>
                handleClick(
                  "https://community.open-bootcamp.com/user/casadofrancisco/certificaciones/2521285d-bd39-4b78-9c8b-1467f1955a9e"
                )
              }
            >
              <span>Certificado</span>
            </ButtonCertfificate>
          </Certificate>
        </ContainerCertificateInd>
        <ContainerCertificateInd>
          <Certificate>
            Javascript{" "}
            <ButtonCertfificate
              onClick={() =>
                handleClick(
                  "https://community.open-bootcamp.com/user/casadofrancisco/certificaciones/c4f555ce-5dc7-45ef-a50a-f4e808d33ce2"
                )
              }
            >
              <span>Certificado</span>
            </ButtonCertfificate>
          </Certificate>
        </ContainerCertificateInd>
        <ContainerCertificateInd>
          <Certificate>
            ReactJS{" "}
            <ButtonCertfificate
              onClick={() =>
                handleClick(
                  "https://community.open-bootcamp.com/user/casadofrancisco/certificaciones/5b9348b9-4793-4292-a0d8-84599f412569"
                )
              }
            >
              <span>Certificado</span>
            </ButtonCertfificate>
          </Certificate>
        </ContainerCertificateInd>
        <ContainerCertificateInd>
          <Certificate>
            GIT{" "}
            <ButtonCertfificate
              onClick={() =>
                handleClick(
                  "https://community.open-bootcamp.com/user/casadofrancisco/certificaciones/8bc9644c-5fb1-4658-bc03-0a681ae55eac"
                )
              }
            >
              <span>Certificado</span>
            </ButtonCertfificate>
          </Certificate>
        </ContainerCertificateInd>
      </ContainerCertificate>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 450px;
  min-height: 100vh;
  background-color: #023e8a;
  font-family: "Inconsolata", monospace;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 45px;
  padding-right: 90px;
  @media (max-width: 1000px) {
    margin-left: 0;
    padding-top: 110px;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
  }
`;
const TitleEducation = styled.h1`
  font-size: 120px;
  color: #90e0ef;
  @media (max-width: 1100px) {
    font-size: 100px;
  }
  @media (max-width: 700px) {
    font-size: 70px;
    margin-top: 30px;
  }
  @media(max-width:400px){
font-size: 50px;
}
`;
const ContainerEducation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 1500px) {
    height: 150px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 1000px) {
    margin-top: 40px;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  @media(max-width:700px){
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
`;
const Autodidacta = styled.h3`
  font-size: 40px;
  color: #ffba08;
`;
const Date = styled.h3`
  font-size: 40px;
  color: white;
  margin-right: 10%;
  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;
const ContainerCertificate = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 110px;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  @media(max-width:700px){
    margin-top: 70px;
}
  
`;
const ContainerCertificateInd = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 35px;
  @media(max-width:700px){
    
    height: 100px;
    
}
`;

const Certificate = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  color: #caf0f8;
  font-size: 25px;
  @media(max-width:700px){
    flex-direction: column;
    
}
`;
const ButtonCertfificate = styled.button`
  & {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #00a896;
    font-family: "Inconsolata", monospace;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
  }
  @media(max-width:700px){
margin-top: 20px;
}

  &:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #ffd401;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
  }

  &:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  & span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 18px 25px;
    color: #fff;
    font-size: 1.25em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 2;
    transition: all 0.3s ease-in-out;
  }

  &:hover span {
    color: #183153;
    animation: scaleUp 0.3s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }
`;
