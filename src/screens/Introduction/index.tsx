import React from "react";
import { Image } from 'react-native';

import backgroundIntroductionScreen from '../../../assets/backgroundIntroductionScreen.png';

import {
  Container,
  ContainerButton,
  ContainerImage,
  Title,
  ContainerTitle,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";

const Introduction: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Vamos te conhecer um pouco...</Title>
      </ContainerTitle>
      

      <ContainerImage>
        <Image source = {backgroundIntroductionScreen} /> 
      </ContainerImage>

      <ContainerButton>  
        <NavigationButton onPress={() => console.log("Próxima tela")} />
      </ContainerButton>
    </Container>
  );
};

export default Introduction;
