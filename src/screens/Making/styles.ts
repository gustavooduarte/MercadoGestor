import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding}px;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
`;

export const ContainerIcon = styled.View`
  background-color: ${colors.secondary};
  border-color: ${colors.lightGray};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-width: 2px;
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
  margin-bottom: 80px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  background-color: ${colors.white};
  width: 100%;
  position: absolute;
  bottom: 60px;
  left: ${metrics.padding}px;
  right: ${metrics.padding}px;
`;

export const TextLabel = styled.Text`
  font-size: ${fonts.bigger}px;
  color: ${colors.blackFont};
  text-align: center;
`;

export const TextInfo = styled.Text`
  font-size: ${fonts.small}px;
  color: ${colors.blackFont};
  text-align: center;
`;

export const TextBackLabel = styled(TextInfo as any)`
  margin-top: 20px;
  color: ${colors.primary};
`;
