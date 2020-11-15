import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { colors, fonts } from "../../styles";
import Chart from "../../components/ChartComponent";

import {
  Container,
  TitleLabel,
  TitlePrice,
  LabelInfo,
  ContainerFlexStart,
  ContainerAlignCenter,
  ContainerObjectives,
  ContainerBacground,
  ContainerMainInfo,
} from "./styles";

const data = [
  {
    name: "Não Essenciais",
    population: 31,
    color: "#F48C37",
    legendFontColor: colors.Gray,
    legendFontSize: fonts.smaller,
  },
  {
    name: "Dívidas",
    population: 30,
    color: "#F04946",
    legendFontColor: colors.Gray,
    legendFontSize: fonts.smaller,
  },
  {
    name: "Essenciais",
    population: 29,
    color: "#0075CF",
    legendFontColor: colors.Gray,
    legendFontSize: fonts.smaller,
  },
  {
    name: "Guardar",
    population: 10,
    color: "#53BB9B",
    legendFontColor: colors.Gray,
    legendFontSize: fonts.smaller,
  },
];

const Home: React.FC = () => {
  const screenWidth = Dimensions.get("window").width - 50;
  return (
    <ScrollView>
      <Container>
        <ContainerBacground>
          <ContainerMainInfo>
            <ContainerFlexStart>
              <TitleLabel>Veja como está o uso do seu salário</TitleLabel>
            </ContainerFlexStart>
            <ContainerObjectives>
              <Chart data={data} width={screenWidth} />
            </ContainerObjectives>
            <ContainerAlignCenter>
              <TitleLabel>Dinheiro guardado para seus objetivos</TitleLabel>
            </ContainerAlignCenter>
            <ContainerAlignCenter>
              <TitlePrice>R$ 1080,00</TitlePrice>
            </ContainerAlignCenter>
            <ContainerFlexStart>
              <LabelInfo>
                MERCADO DE PONTOS ACUMULADO GUARDANDO DINHEIRO: 300PTS
              </LabelInfo>
            </ContainerFlexStart>
          </ContainerMainInfo>
        </ContainerBacground>
      </Container>
    </ScrollView>
  );
};

export default Home;
