import React, { useState } from "react";
import { ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

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
  ContainerCDI,
  LabelCDI,
  ContainerIcon
} from "./styles";

import { useNavigation } from "@react-navigation/native";

const FinancialReserve: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ContainerBacground>
          <ContainerMainInfo>
            <ContainerFlexStart>
              <TitleLabel>Seu saldo guardado</TitleLabel>
            </ContainerFlexStart>
            <ContainerAlignCenter>
              <TitlePrice>R$ 1.080,00</TitlePrice>
            </ContainerAlignCenter>
            <ContainerFlexStart>
              <LabelInfo>Seus objetivos: </LabelInfo>
            </ContainerFlexStart>
            <ContainerObjectives>
              <ContainerAlignRow>
                <LabelInfo>1º Viajar: </LabelInfo>
                <LabelInfo>R$ 1.500,00</LabelInfo>
              </ContainerAlignRow>
              <ContainerAlignRow>
                <LabelInfo>2º Celular: </LabelInfo>
                <LabelInfo>R$ 2.500,00</LabelInfo>
              </ContainerAlignRow>
            </ContainerObjectives>
            <ContainerFlexStart>
              <ContainerStatus>
                <LabelInfoStatus>Situação</LabelInfoStatus>
              </ContainerStatus>
            </ContainerFlexStart>
            <ContainerAlignCenter>
              <LabelInfo>
                Faltam R$ 420,00 para viajarmos, estamos quase lá!
              </LabelInfo>
            </ContainerAlignCenter>
            <ContainerFlexStart>
              <TitleLabel>Seu fundo de emergência</TitleLabel>
            </ContainerFlexStart>
            <ContainerAlignCenter>
              <TitlePrice>R$ 20.000,00</TitlePrice>
            </ContainerAlignCenter>
            <ContainerCDI>
              <LabelCDI>
                Dá uma olhada como seu dinheiro está rendendo no CDI
              </LabelCDI>
              <ContainerIcon>
                <AntDesign name="right" size={20} color="black" />
              </ContainerIcon>
            </ContainerCDI>
          </ContainerMainInfo>
        </ContainerBacground>
      </Container>
    </ScrollView>
  );
};

export default FinancialReserve;
