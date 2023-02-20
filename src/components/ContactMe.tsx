import React, { useCallback } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import react from "../assets/iconColor/react.png";
import ts from "../assets/iconColor/ts.png";
import sc from "../assets/iconColor/styled.png";
import figma from "../assets/iconColor/figma.png";
import Swal from "sweetalert2";
import { motion } from "framer-motion";


export const ContactMe: React.FC<{}> = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setdone] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formCompleted, setformCompleted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // `Enviando formulario con los siguentes datos:
      
    // Nombre: ${name}
    // Email: ${email}
    // Mensaje: ${message}`

    

    if (formCompleted) {
      Swal.fire({
        icon: 'success',
        title: `Nombre: ${name}!`,
        html: `Email: ${email}<br/>Mensaje: ${message}`,
        confirmButtonText: 'Enviar email'
      });
    } else {
      Swal.fire("Por favor, completar todos los campos antes de enviar el formulario");
    }

    emailjs
      .sendForm(
        "service_lftpegn",
        "template_oc0f6in",
        formRef.current as HTMLFormElement,
        "Sz6BkbrLCXl0-nmpj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function checkForm() {
    if (name !== "" && email !== "") {
      setformCompleted(true);
    } else {
      setformCompleted(false);
    }
  }
  const handleClick = useCallback(() => {
    window.open(
      "https://www.figma.com/file/Zc6A2gz6kw9Ryrl9mqGwVn/portafolio?node-id=1%3A4&t=32gYUV36g3uiCwrL-1",
      "_blank"
    );
  }, []);

   
  return (
    <Container className="container" id="contacto">
      <Title className="title">Contacto</Title>
     
      <SubTitle>
        Si te gustó mi trabajo y estás interesado en contactarme, por favor
        completa el siguiente formulario de contacto.
      </SubTitle>
      <ContainerInfo>
        <Form ref={formRef} onSubmit={handleSubmit} className="containerForm">
          <ContainerInput>
            <Label className="label">Nombre</Label>
            <Input
              type="text"
              className="inputForm"
              placeholder="Ingresar nombre"
              name="user_name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              onBlur={checkForm}
              value={name}
              required
            />
          </ContainerInput>

          <ContainerInput>
            <Label className="label">Email</Label>
            <Input
              type="email"
              className="inputForm"
              placeholder="Ingresar Email"
              name="user_email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              required
            />
          </ContainerInput>
          <ContainerInput>
            <Label className="labelMessage">Mensaje</Label>
            <TexTarea
              rows={5}
              className="textForm"
              placeholder="Ingresar mensaje 🙌"
              name="message"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              onBlur={checkForm}
              value={message}
              required
            />
          </ContainerInput>

          <Button
            className="buttonForm"
            type="submit"
            disabled={!formCompleted}
          >
            Submit <i className="fa-regular fa-paper-plane"></i>
          </Button>
          <LabelSend className="gratitude">
            {done && "thank your for masssage"}
          </LabelSend>
        </Form>

        <ContainerData>
          <Hr1 />

          <TextProject>Este portafolio esta desarrrollado con:</TextProject>
          <ContainerIcon>
            <Icon src={react}   whileHover = {{scale : [null, 1.2, 1.2]}}
            transition = {{duration:1}}/>
            <Icon src={ts}  whileHover = {{scale : [null, 1.2, 1.2]}}
            transition = {{duration:1}}/>
            <IconSC src={sc}  whileHover = {{scale : [null, 1.2, 1.2]}}
            transition = {{duration:1}}/>
            <Icon src={figma}  whileHover = {{scale : [null, 1.2, 1.2]}}
            transition = {{duration:1}}/>
          </ContainerIcon>
          <Hr />
          <ContainerFigma>
            <TextoFigma>Para visualizar el proyecto en figma </TextoFigma>
            <BotonFigma onClick={() => handleClick()}>
              <span>Click here</span>
            </BotonFigma>
          </ContainerFigma>
        </ContainerData>
      </ContainerInfo>
    
    </Container>

  );
};


const Container = styled.div`
  margin-left: 450px;
  min-height: 100vh;
  font-family: "Inconsolata", monospace;
  background-color: #023e8a;
  padding-left: 50px;
  padding-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-right: 20px;
  @media (max-width: 1000px) {
    
    margin-left: 0;
    padding-top: 140px;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const Title = styled.h1`
  font-size: 100px;
  color: #90e0ef;
  @media (max-width: 700px) {
    font-size: 80px;
  }
`;
const SubTitle = styled.h4`
  color: white;
  font-size: 30px;
  padding-top: 20px;
`;
const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1150px) {
    flex-direction: column;
    padding-bottom: 70px;
  }
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`;
const Label = styled.label`
  color: white;
  font-size: 40px;
  font-weight: 500;
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 50px;
  height: 500px;
  width: 450px;
  border-radius: 10px;
  background-color: #0077b6;
  padding-left: 30px;
  padding-right: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3), -3px -3px 6px rgba(0, 0, 0, 0.3);
  @media (max-width: 1150px) {
    width: 400px;
  }
  @media (max-width: 1000px) {
    width: 95%;
    padding-right: 0;
    align-items: center;
    padding-left: 0;
  }
`;
const Input = styled.input`
  font-family: "Inconsolata", monospace;
  font-weight: 800;
  font-size: 15px;
  height: 40px;
  width: 180px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
`;

const TexTarea = styled.textarea`
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  height: 100px;
  width: 60%;
  font-family: "Inconsolata", monospace;
  font-weight: 800;
  font-size: 15px;
`;
const Button = styled.button`
  font-family: "Inconsolata", monospace;
  font-size: 20px;
  font-weight: 500;
  height: 30px;
  margin-left: 10px;
  border-radius: 7px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  background-color: transparent;
  transition: 1s;
  &:hover {
    background-color: #ffba08;
    color: #023e8a;
  }
`;
const ContainerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;

  width: 90%;
  height: 450px;
  padding-left: 20px;
  @media (max-width: 700px) {
    height: 90%;
    padding-left: 0;
  }
`;

const TextProject = styled.p`
  font-size: 30px;
  color: #90e0ef;
  font-weight: 500;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1150px) {
    font-size: 26px;
  }
`;

const Icon = styled(motion.img)`
  height: 70px;
  width: 70px;
  padding-right: 30px;
  padding-top: 30px;
  @media (max-width: 700px) {
    height: 40px;
    width: 40px;
  }
`;
const IconSC = styled(motion.img)`
  padding-top: 10px;
  height: 70px;
  width: 70px;
  padding-right: 10px;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Hr = styled.hr`
  width: 75%;
  margin-top: 20px;
  border: solid 1px;
  color: #90e0ef;
`;
const Hr1 = styled.hr`
  width: 75%;

  border: solid 1px;
  color: #90e0ef;
`;
const LabelSend = styled.label`
  font-size: 20px;
  color: #ffba08;
  font-weight: 600;
`;
const ContainerFigma = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TextoFigma = styled.p`
  color: white;
  font-size: 20px;
`;
const BotonFigma = styled.button`
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
    margin-top: 30px;
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
