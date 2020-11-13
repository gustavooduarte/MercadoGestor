import React from "react";

import {
  Container,
  ContainerButton,
  ContainerInfo,
  TextLabel,
  TextInfo,
} from "./styles";

import DefaultButton from "../../components/DefaultButton";

const Home: React.FC = () => {
  return (
    <Container>
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
      </ContainerButton>
    </Container>
  );
};

export default Home;
