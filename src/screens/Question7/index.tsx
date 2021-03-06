import React, { useState } from "react";

import {
  Container,
  ContainerButton,
  Title,
  ContainerTitle,
  ContainerInfo,
  TextInfoFooter,
  ContainerImage,
  TextInfo,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";
import { useNavigation } from "@react-navigation/native";
import DefaultRadioList from "../../components/DefaultRadioList";

import emergency_screen_image from "../../../assets/emergency_screen_image.png";
import { Image, ScrollView } from "react-native";

const Question7: React.FC = () => {
  const [radioSelect, setRadioSelect] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ContainerTitle>
          <Title>
            Vamos falar um pouco sobre a sua reserva de emergência...
          </Title>
        </ContainerTitle>
        <ContainerInfo>
          <TextInfo>
            As reservas de emergência servem para ajudar em momentos difíceis, o
            ideal é você sempre ter um dinheiro guardado para caso for demitido
            ou ter gastos inesperados com saúde, acidentes, entre outros
            imprevistos.
          </TextInfo>
        </ContainerInfo>
        <ContainerImage>
          <Image source={emergency_screen_image} resizeMode="contain" />
        </ContainerImage>
        <ContainerInfo>
          <TextInfo>
            A recomendação é que você tenha uma reserva de 6 meses do seu
            salário caso for um profissional contrato e 1 ano se for um
            profissional liberal.
          </TextInfo>
        </ContainerInfo>

        <DefaultRadioList
          label="Você tem uma reserva de emergência?"
          setFlag={() => setRadioSelect(!radioSelect)}
        />

        <ContainerInfo>
          <TextInfoFooter>
            Juntos vamos fazer um fundo de emergência, para que você possa
            dormir tranquilo(a).
          </TextInfoFooter>
        </ContainerInfo>

        <ContainerButton>
          <NavigationButton onPress={() => navigation.navigate("Question8")} />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
};

export default Question7;
