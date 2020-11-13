import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  background-color: ${colors.white};
  width: 100%;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  background-color: ${colors.white};
  position: absolute;
  bottom: ${metrics.padding}px;
  right: ${metrics.padding}px;
  width: 30%;
`;
