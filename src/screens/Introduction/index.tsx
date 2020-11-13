import React from "react";
import { Image } from "react-native";

import backgroundIntroductionScreen from "../../../assets/backgroundIntroductionScreen.png";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerButton,
  ContainerImage,
  Title,
  ContainerTitle,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";

const Introduction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTitle>
        <Title>Vamos te conhecer um pouco...</Title>
      </ContainerTitle>
      <ContainerImage>
        <Image source={backgroundIntroductionScreen} />
      </ContainerImage>
      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Question1")} />
      </ContainerButton>
    </Container>
  );
};

export default Introduction;
