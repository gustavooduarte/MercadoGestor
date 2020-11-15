import React, { useState } from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Container2,
  Container3,
  ContainerFlat,
  TextFlat,
  ContainerImage,
  TextLabel,
  ContainerBacground,
  ContainerMainInfo,
  ContainerTag,
  TextTag,
  ContainerRow,
} from "./styles";
import { colors } from "../../styles";

const DATA_ESSENCIAIS = [
  {
    id: "1",
    label: "Conta de luz",
    value: "86,70",
    data: "10 de mai",
  },
  {
    id: "2",
    label: "Conta de Água",
    value: "40,36",
    data: "18 de abr",
  },
  {
    id: "3",
    label: "Conta de Internet",
    value: "100,00",
    data: "15 de mar",
  },
  {
    id: "4",
    label: "Conta de Gás",
    value: "70,00",
    data: "15 de fev",
  },
  {
    id: "5",
    label: "Conta de Telefone",
    value: "86,70",
    data: "20 de jan",
  },
];
const DATA_NAO_ESSENCIAIS = [
  {
    id: "1",
    label: "Fast food",
    value: "50,00",
    data: "15 de mai",
  },
  {
    id: "2",
    label: "Barzinho",
    value: "20,50",
    data: "15 de abr",
  },
  {
    id: "3",
    label: "Eletrônicos",
    value: "120,70",
    data: "15 de mar",
  },
  {
    id: "4",
    label: "Cinema",
    value: "100,00",
    data: "15 de fev",
  },
  {
    id: "5",
    label: "Torto",
    value: "10,00",
    data: "15 de jan",
  },
];

const Start: React.FC = () => {
  const [choice, setChoice] = useState<number>(1);
  return (
    <Container>
      <ContainerBacground>
        <ContainerMainInfo>
          <TextLabel>Suas Atividades: </TextLabel>
          <ContainerRow>
            <ContainerTag
              onPress={() => {
                setChoice(1);
              }}
              bc={choice === 1 ? colors.primary : "#FFF"}
            >
              <TextTag cl={choice === 1 ? colors.primary : colors.lightGray}>
                Essenciais
              </TextTag>
            </ContainerTag>
            <ContainerTag
              onPress={() => {
                setChoice(2);
              }}
              bc={choice === 2 ? "#F48C37" : "#FFF"}
            >
              <TextTag cl={choice === 2 ? "#F48C37" : colors.lightGray}>
                Não Essenciais
              </TextTag>
            </ContainerTag>
          </ContainerRow>
          {choice === 1 && (
            <>
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
                        <TextFlat>R$ {item.value}</TextFlat>
                        <TextFlat cl={colors.lightGray}>{item.data}</TextFlat>
                      </Container3>
                    </Container2>
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </ContainerFlat>
            </>
          )}

          {choice === 2 && (
            <>
              <ContainerFlat>
                <FlatList
                  data={DATA_NAO_ESSENCIAIS}
                  renderItem={({ item }) => (
                    <Container2>
                      <ContainerImage bc="#F48C37">
                        <Feather
                          name="shopping-bag"
                          size={24}
                          color="#F48C37"
                        />
                      </ContainerImage>
                      <TextFlat>{item.label}</TextFlat>
                      <Container3>
                        <TextFlat>R$ {item.value}</TextFlat>
                        <TextFlat cl={colors.lightGray}>{item.data}</TextFlat>
                      </Container3>
                    </Container2>
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </ContainerFlat>
            </>
          )}
        </ContainerMainInfo>
      </ContainerBacground>
    </Container>
  );
};

export default Start;
