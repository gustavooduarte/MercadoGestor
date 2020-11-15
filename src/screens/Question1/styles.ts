import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
  min-height: ${metrics.screenHeight}px;
`;

export const ContainerTitle = styled.View`
  justify-content: center;
  margin-bottom: 20px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  background-color: ${colors.white};
  align-self: flex-end;
  width: 30%;
`;

export const Title = styled.Text`
  font-size: ${fonts.bigger}px;
  color: ${colors.blackFont};
  text-align: center;
`;
