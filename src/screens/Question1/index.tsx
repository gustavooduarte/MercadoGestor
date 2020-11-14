import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";

import { Container, ContainerButton, Title, ContainerTitle } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const Question1: React.FC = () => {
  const [aux, setAux] = useState<string>();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ContainerTitle>
          <Title>Fala pra gente quanto você costuma ganhar por mês.</Title>
        </ContainerTitle>
        <TextInputMask
          type="money"
          value={aux}
          onChangeText={(value) => {
            setAux(value);
          }}
          customTextInput={DefaultInput}
          customTextInputProps={{
            label: "Qual sua média salarial?",
          }}
        />
        <ContainerButton>
          <NavigationButton onPress={() => navigation.navigate("Question2")} />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
};

export default Question1;
