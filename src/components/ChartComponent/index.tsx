import React from "react";
import { ActivityIndicator, Dimensions } from 'react-native';
import { PieChart } from 'expo-chart-kit';

import { Container, TextButton } from "./styles";

interface IProps {
  flagActivit?: boolean;
  data: Array<{ name: String, population: Number, color: String, legendFontColor: String, legendFontSize: Number }>
  width: Number;
}

const ChartComponent: React.FC<IProps> = ({ flagActivit, data, width }) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`
  }

  return (

    <Container>
      <PieChart
        data={data}
        width={width}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </Container>

  )
};

export default ChartComponent;
