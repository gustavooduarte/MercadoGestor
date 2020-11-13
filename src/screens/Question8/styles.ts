import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
`;

export const ContainerTitle = styled.View`
  justify-content: center;
  margin-bottom: ${metrics.DistBottom}px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  background-color: ${colors.white};
  position: absolute;
  bottom: ${metrics.padding}px;
  right: ${metrics.padding}px;
  width: 30%;
`;

export const ContainerAlignRow = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${fonts.bigger}px;
  color: ${colors.blackFont};
  text-align: center;
`;
