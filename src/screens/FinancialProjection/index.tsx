import React, { useState } from "react";
import { ScrollView } from "react-native";

import {
  Container,
  TitleLabel,
  TitlePrice,
  LabelInfo,
  LabelInfoStatus,
  ContainerFlexStart,
  ContainerAlignCenter,
  ContainerObjectives,
  ContainerBacground,
  ContainerMainInfo,
  ContainerAlignRow,
  ContainerStatus,
} from "./styles";
import ComboBox from "../../components/DefaultComboBox";

const FinancialProjection: React.FC = () => {
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
  return (
    <ScrollView>
      <Container>
        <ContainerBacground>
          <ContainerMainInfo>
            <ContainerFlexStart>
              <TitleLabel>Projetando seus objetivos</TitleLabel>
            </ContainerFlexStart>
            <ComboBox items={DATA} />
            <ContainerObjectives>
              <ContainerAlignRow>
                <LabelInfo>1º Viajar: </LabelInfo>
                <LabelInfo>R$ 3.500,00</LabelInfo>
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
                <LabelInfo>Total a pagar: R$ 4.350,00</LabelInfo>
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
                <LabelInfo>Total a pagar: R$ 3.850,00</LabelInfo>
              </ContainerAlignRow>
            </ContainerObjectives>
          </ContainerMainInfo>
        </ContainerBacground>
      </Container>
    </ScrollView>
  );
};

export default FinancialProjection;
