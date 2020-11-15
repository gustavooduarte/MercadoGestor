import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
  padding-bottom: 90px;
`;

export const ContainerTitle = styled.View`
  justify-content: center;
   margin-bottom: 10px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  background-color: ${colors.white};
  align-self: flex-end;
  top: ${metrics.padding}px;
  width: 30%;
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-content: center;
  margin-top: ${metrics.padding}px;
  margin-bottom: ${metrics.padding}px;
  margin-left: ${-metrics.padding}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.bigger}px;
  color: ${colors.blackFont};
  text-align: center;
`;

export const TextInfo = styled.Text`
  font-size: ${fonts.small}px;
  color: ${colors.blackFont};
  text-align: center;
`;

export const TextInfoFooter = styled(TextInfo as any)`
  font-size: ${fonts.regular}px;
`;
