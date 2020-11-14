import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

import { Container, ContainerButton, Title, ContainerTitle } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";

const Question2: React.FC = () => {
  const itemsTest = [
    { id: "1", itemLabel: "Aluguel" },
    {
      id: "2",
      itemLabel: "Água",
    },
    {
      id: "3",
      itemLabel: "Luz",
    },
    {
      id: "4",
      itemLabel: "Mercado",
    },
  ];

  const [item1, setItem1] = useState({ itemLabel: "Aluguel", itemValue: "" });
  const [item2, setItem2] = useState({ itemLabel: "Água", itemValue: "" });
  const [item3, setItem3] = useState({ itemLabel: "Luz", itemValue: "" });
  const [item4, setItem4] = useState({ itemLabel: "Mercado", itemValue: "" });

  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTitle>
        <Title>Me diga a média de cada conta...</Title>
      </ContainerTitle>

      <TextInputMask
        type="money"
        value={item1.itemValue}
        onChangeText={(value) => {
          const aux = { itemLabel: item1.itemLabel, itemValue: value };
          setItem1(aux);
        }}
        customTextInput={DefaultInput}
        customTextInputProps={{
          label: item1.itemLabel,
        }}
      />

      <TextInputMask
        type="money"
        value={item2.itemValue}
        onChangeText={(value) => {
          const aux = { itemLabel: item2.itemLabel, itemValue: value };
          setItem2(aux);
        }}
        customTextInput={DefaultInput}
        customTextInputProps={{
          label: item2.itemLabel,
        }}
      />

      <TextInputMask
        type="money"
        value={item3.itemValue}
        onChangeText={(value) => {
          const aux = { itemLabel: item3.itemLabel, itemValue: value };
          setItem3(aux);
        }}
        customTextInput={DefaultInput}
        customTextInputProps={{
          label: item3.itemLabel,
        }}
      />

      <TextInputMask
        type="money"
        value={item4.itemValue}
        onChangeText={(value) => {
          const aux = { itemLabel: item4.itemLabel, itemValue: value };
          setItem4(aux);
        }}
        customTextInput={DefaultInput}
        customTextInputProps={{
          label: item4.itemLabel,
        }}
      />

      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Question5")} />
      </ContainerButton>
    </Container>
  );
};

export default Question2;
