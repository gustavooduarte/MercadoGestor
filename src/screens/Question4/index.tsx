import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Container, ContainerButton, Title, ContainerTitle } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";



const Question2: React.FC = () => {
  const itemsTest = [ 
    { "id": "1",
      itemLabel: "Aluguel",
    },
    {
      "id": "2",
      itemLabel: "Aluguel",
    },
    {
      "id": "3",
      itemLabel: "Luz",
    },
    {
      "id": "4",
      itemLabel: "Mercado",
    },
  ]

  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTitle>
        <Title>Me diga a média de cada conta...</Title>
      </ContainerTitle>

      <FlatList
        data={itemsTest}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DefaultInput label={item.itemLabel} />
        )}
      />
      

      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Introduction")} />
      </ContainerButton>
    </Container>
  );
};

export default Question2;
