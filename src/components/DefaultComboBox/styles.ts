import { Input } from "react-native-elements";

import styled from "styled-components/native";

import { colors, metrics, fonts } from "../../styles";

export const Container = styled.View`
  background-color: ${colors.transparent};
  padding: ${metrics.padding}px;
  border-radius: 4px;
  justify-content: center;
  width: 100%;
`;

export const TextLabel = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.fontSearchInput}px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const ContainerComboBox = styled.View`
  borderWidth: 2px;
  margin-left: 10px;
  width: 141px;
  borderRadius: 10px;
  borderColor: ${colors.lightGray}
`;
