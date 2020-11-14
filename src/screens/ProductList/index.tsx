import React from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Container2,
  Container3,
  ContainerFlat,
  TextFlat,
  ContainerImage,
  Text,
  ContainerText,
  ContainerBacground,
  ContainerMainInfo,
} from "./styles";
import { colors } from "../../styles";

const Start: React.FC = () => {
  const DATA_ESSENCIAIS = [
    {
      id: "1",
      label: "Conta de luz",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "2",
      label: "Conta de luz",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "3",
      label: "Conta de luz",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "4",
      label: "Conta de luz",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "5",
      label: "Conta de luz",
      value: "86,70",
      data: "15 de junho",
    },
  ];
  const DATA_NAO_ESSENCIAIS = [
    {
      id: "1",
      label: "Fast food",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "2",
      label: "Fast food",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "3",
      label: "Fast food",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "4",
      label: "Fast food",
      value: "86,70",
      data: "15 de junho",
    },
    {
      id: "5",
      label: "Fast food",
      value: "86,70",
      data: "15 de junho",
    },
  ];
  return (
    <Container>
      <ContainerBacground>
        <ContainerMainInfo>
          <ContainerText>
            <Text cl={colors.primary}>Essenciais</Text>
          </ContainerText>
          <ContainerFlat>
            <FlatList
              data={DATA_ESSENCIAIS}
              renderItem={({ item }) => (
                <Container2>
                  <ContainerImage>
                    <Feather
                      name="shopping-bag"
                      size={24}
                      color={colors.primary}
                    />
                  </ContainerImage>
                  <TextFlat>{item.label}</TextFlat>
                  <Container3>
                    <TextFlat>{item.value}</TextFlat>
                    <TextFlat cl={colors.lightGray}>{item.data}</TextFlat>
                  </Container3>
                </Container2>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </ContainerFlat>
          <ContainerText>
            <Text cl="#F48C37">Não essencial</Text>
          </ContainerText>
          <ContainerFlat>
            <FlatList
              data={DATA_NAO_ESSENCIAIS}
              renderItem={({ item }) => (
                <Container2>
                  <ContainerImage bc="#F48C37">
                    <Feather name="shopping-bag" size={24} color="#F48C37" />
                  </ContainerImage>
                  <TextFlat>{item.label}</TextFlat>
                  <Container3>
                    <TextFlat>{item.value}</TextFlat>
                    <TextFlat cl={colors.lightGray}>{item.data}</TextFlat>
                  </Container3>
                </Container2>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </ContainerFlat>
        </ContainerMainInfo>
      </ContainerBacground>
    </Container>
  );
};

export default Start;
