import styled from "styled-components/native";

import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  background-color: ${colors.white};
  width: 100%;
  min-height: ${metrics.screenHeight}px;
`;

export const ContainerButton = styled.View`
  background-color: ${colors.white};
  width: 30%;
`;

export const Container2 = styled.View`
  width: 100%;
`;
export const Container4 = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const Container3 = styled.View`
  margin-left: ${metrics.DistLeft}px;
`;
