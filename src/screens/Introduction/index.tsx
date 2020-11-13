import React from "react";
import { Image } from 'react-native';



import {
  Container,
  ContainerButton,
  Title,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";

const Introduction: React.FC = () => {
  return (
    <Container>
      <Title>Vamos te conhecer um pouco...</Title>
      <ContainerButton>
        <NavigationButton onPress={() => console.log("Próxima tela")} />
      </ContainerButton>
    </Container>
  );
};

export default Introduction;
