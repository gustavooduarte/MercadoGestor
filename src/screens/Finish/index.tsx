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

import checkIcon from "../../../assets/checkIcon.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Finish: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerIcon>
        <Image source={checkIcon} />
      </ContainerIcon>
      <ContainerInfo>
        <TextLabel>Pronto!</TextLabel>
        <TextInfo>
          Seu Perfil está habilitado para uso da
          aplicação.
        </TextInfo>
      </ContainerInfo>
      <ContainerButton>
        <DefaultButton
          label="Meu Gestor Financeiro"
          onPress={() => { console.log("Essa é a última tela")}}
        />
      </ContainerButton>
    </Container>
  );
};

export default Finish;
