import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { colors, fonts, metrics } from "../../styles";
import Chart from "../../components/ChartComponent";

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

import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const data = [
    { name: 'Não Essenciais', population: 31, color: '#F48C37', legendFontColor: colors.Gray, legendFontSize: fonts.smaller },
    { name: 'Dívidas', population: 30, color: '#F04946', legendFontColor: colors.Gray, legendFontSize: fonts.smaller },
    { name: 'Essenciais', population: 29, color: '#0075CF', legendFontColor: colors.Gray, legendFontSize: fonts.smaller },
    { name: 'Guardar', population: 10, color: '#53BB9B', legendFontColor: colors.Gray, legendFontSize: fonts.smaller }
  ]

  const screenWidth = Dimensions.get('window').width - 50;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ContainerBacground>
          <ContainerMainInfo>

            <ContainerFlexStart>
              <TitleLabel>Aqui está nossa sugestão de gerenciamento para você</TitleLabel>
            </ContainerFlexStart>
            
            <ContainerFlexStart>
              <LabelInfo>Sugestão para seu salário: </LabelInfo>
            </ContainerFlexStart>

            <ContainerObjectives>
              <Chart data={data} width={screenWidth} />
            </ContainerObjectives>

            <ContainerFlexStart>
              <TitleLabel>Dinheiro guardado para o seu sonho</TitleLabel>
            </ContainerFlexStart>
            <ContainerAlignCenter>
              <TitlePrice>R$ 280,00</TitlePrice>
            </ContainerAlignCenter>
            <ContainerFlexStart>
              <LabelInfo>MERCADO DE PONTOS ACUMULADO GUARDANDO DINHEIRO: 300PTS</LabelInfo>
            </ContainerFlexStart>

          </ContainerMainInfo>
        </ContainerBacground>
      </Container>
    </ScrollView>
  );
};

export default Home;
