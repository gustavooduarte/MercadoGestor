import styled from "styled-components/native";

import { colors, fonts, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.grayBackground};
  width: 100%;
  min-height: ${metrics.screenHeight}px;
`;

export const ContainerBacground = styled.View`
  background-color: ${colors.primary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 50%;
`;
export const ContainerMainInfo = styled.View`
  background-color: ${colors.white};
  margin: ${metrics.padding}px;
  padding: ${metrics.padding}px;
  border-radius: 16px;
  justify-content: center;
  position: absolute;
  width: 91%;
`;
export const ContainerFlat = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 5,
})`
  border-radius: 25px;
  background-color: ${colors.white};
  height: 170px;
`;

interface IImage {
  bc?: string;
}
export const ContainerImage = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 5,
})<IImage>`
  border-radius: 50px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-color: ${(props) => props.bc || colors.primary};
  border-width: 1px;
`;
export const Container2 = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 5,
})`
  width: 100%;
  height: 70px;
  justify-content: space-between;
  flex-direction: row;
  padding: ${metrics.padding}px;
  padding-left: 35px;
  padding-right: 20px;
  background-color: ${colors.white};
  align-items: center;
`;
export const Container3 = styled.View`
  justify-content: space-around;
`;
interface ITextFlat {
  cl?: string;
}
export const TextFlat = styled.Text<ITextFlat>`
  font-size: ${fonts.small}px;
  color: ${(props) => props.cl || colors.blackFont};
`;
interface IText {
  cl?: string;
}
export const Text = styled.Text<IText>`
  font-size: ${fonts.regular}px;
  color: ${(props) => props.cl || colors.blackFont};
`;
export const ContainerText = styled.View`
  width: 100%;
  align-items: flex-start;
  margin: 10px;
`;
