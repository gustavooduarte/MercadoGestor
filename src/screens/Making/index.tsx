import React, { useState } from "react";
import { Dimensions } from 'react-native';
import { Container } from "./styles";

import Chart from "../../components/ChartComponent";

const Start: React.FC = () => {
  const data = [
    { name: 'Não Essenciais', population: 31, color: '#F48C37', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Dívidas', population: 30, color: '#F04946', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Essenciais', population: 29, color: '#0075CF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Guardar', population: 10, color: '#53BB9B', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]

  const screenWidth = Dimensions.get('window').width - 30;

  return (
    <Container>
      <Chart data={data} width={screenWidth} />
    </Container>
    
  );
};

export default Start;
