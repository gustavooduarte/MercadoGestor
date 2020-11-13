import Ripple from "react-native-material-ripple";

import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 5px;
`;

export const CheckListItem = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  padding-bottom: ${metrics.padding}px;
`;

export const CheckContainer = styled(Ripple)`
  background-color: ${colors.white};
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
`;

export const TextItemLabel = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.blackFont};
  text-align: center;
`;
