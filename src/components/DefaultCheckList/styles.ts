import Ripple from "react-native-material-ripple";

import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const CheckListItem = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  margin-left: ${metrics.DistLeft}px;
  padding-bottom: ${metrics.DistBottom}px;
`;

export const CheckContainer = styled(Ripple)`
  background-color: ${colors.white};
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
`;

export const TextItemLabel = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.blackFont};
  text-align: center;
`;
