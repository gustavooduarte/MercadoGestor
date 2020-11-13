import Ripple from "react-native-material-ripple";

import styled from "styled-components/native";

import { colors, metrics, fonts } from "../../styles";

export const Container = styled.View`
  background-color: ${colors.transparent};
  padding: ${metrics.padding}px;
  border-radius: 4px;
  width: 100%;
`;

export const Container2 = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  margin-left: ${metrics.DistLeft}px;
`;
export const CheckContainer = styled(Ripple)``;

interface ITitle {
  fs?: number;
  ta?: string;
  ml?: number;
}
export const TextTitle = styled.Text<ITitle>`
  color: ${colors.black};
  font-size: ${(props) => props.fs || fonts.regular}px;
  margin-bottom: ${metrics.DistBottom}px;
  margin-left: ${(props) => props.ml || 1}px;
  text-align: ${(props) => props.ta || "center"};
`;
export const Text = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.regular}px;
  margin-top: 3px;
  margin-left: 10px;
`;
