import { Input } from "react-native-elements";

import styled from "styled-components/native";

import { colors, metrics, fonts } from "../../styles";

interface IContainerInput {
  bColor?: string;
}

export const ContainerInput = styled(Input as any).attrs(
  (props: IContainerInput) => ({
    inputContainerStyle: {
      borderBottomColor: props.bColor || colors.black,
    },
  })
)<IContainerInput>``;

export const Container = styled.View`
  background-color: ${colors.transparent};
  padding-left: ${metrics.padding}px;
  padding-right: ${metrics.padding}px;
  border-radius: 4px;
  justify-content: center;
  width: 100%;
`;

export const TextLabel = styled.Text`
  color: ${colors.blackFont};
  font-size: ${fonts.fontSearchInput}px;
  margin-left: 9px;
`;

export const Text = styled.Text`
  color: ${colors.blackFont};
  font-size: ${fonts.regular}px;
`;
