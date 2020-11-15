import React, { useState } from "react";
import { ScrollView } from "react-native";

import {
  Container,
  TitleLabel,
  LabelInfo,
  ContainerFlexStart,
  ContainerObjectives,
  ContainerBacground,
  ContainerMainInfo,
  ContainerAlignRow,
} from "./styles";
import ComboBox from "../../components/DefaultComboBox";

const DATA = [
  {
    id: "1",
    itemLabel: "Viajar",
  },
  {
    id: "2",
    itemLabel: "Celular",
  },
];

const FinancialProjection: React.FC = () => {
  const [isSelected, setIsSelected] = useState("Viajar");
  return (
    <ScrollView>
      <Container>
        <ContainerBacground>
          <ContainerMainInfo>
            <ContainerFlexStart mb={7}>
              <TitleLabel>Projetando seus objetivos</TitleLabel>
            </ContainerFlexStart>
            <ContainerFlexStart ml={-25} mb={7}>
              <ComboBox items={DATA} onChange={(item) => setIsSelected(item)} />
            </ContainerFlexStart>
            <ContainerObjectives>
              <ContainerAlignRow>
                <LabelInfo>
                  {isSelected === "Viajar" ? "1º Viajar: " : "2º Celular: "}
                </LabelInfo>
                <LabelInfo>
                  {isSelected === "Viajar" ? "R$ 1.500,00" : "R$ 2.500,00"}
                </LabelInfo>
              </ContainerAlignRow>
            </ContainerObjectives>
            <ContainerFlexStart mb={7}>
              <LabelInfo>Fazendo um empréstimo </LabelInfo>
            </ContainerFlexStart>
            <ContainerObjectives>
              <ContainerAlignRow>
                <LabelInfo>Duração: 3 anos</LabelInfo>
              </ContainerAlignRow>
              <ContainerAlignRow>
                <LabelInfo>
                  Total a pagar:{" "}
                  {isSelected === "Viajar" ? "R$ 1.790,00" : "R$ 2.980,00"}
                </LabelInfo>
              </ContainerAlignRow>
            </ContainerObjectives>
            <ContainerFlexStart mb={7}>
              <LabelInfo>Guardando </LabelInfo>
            </ContainerFlexStart>
            <ContainerObjectives>
              <ContainerAlignRow>
                <LabelInfo>Duração: 3 anos</LabelInfo>
              </ContainerAlignRow>
              <ContainerAlignRow>
                <LabelInfo>
                  Total a pagar:{" "}
                  {isSelected === "Viajar" ? "R$ 1.630,00" : "R$ 2.720,00"}
                </LabelInfo>
              </ContainerAlignRow>
            </ContainerObjectives>
          </ContainerMainInfo>
        </ContainerBacground>
      </Container>
    </ScrollView>
  );
};

export default FinancialProjection;
