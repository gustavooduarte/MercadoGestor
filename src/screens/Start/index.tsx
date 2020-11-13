import React from "react";

import {
  Container,
  ContainerButton,
  ContainerIcon,
  ContainerInfo,
  TextLabel,
  TextBackLabel,
  TextInfo,
} from "./styles";

import DefaultButton from "../../components/DefaultButton";

import graphIcon from "../../../assets/graph.png";
import { Image } from "react-native";

const Start: React.FC = () => {
  return (
    <Container>
      <ContainerIcon>
        <Image source={graphIcon} />
      </ContainerIcon>
      <ContainerInfo>
        <TextLabel>Meu Gestor</TextLabel>
        <TextLabel>Financeiro</TextLabel>
        <TextInfo>
          Por mais que você ache que viver o hoje é o melhor, você deve saber
          que o amanhã irá chegar de qualquer forma.
        </TextInfo>
      </ContainerInfo>
      <ContainerButton>
        <DefaultButton label="Bora Começar!" />
        <TextBackLabel>Voltar ao início</TextBackLabel>
      </ContainerButton>
    </Container>
  );
};

export default Start;
