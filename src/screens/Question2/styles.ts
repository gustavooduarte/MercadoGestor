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
  align-self: flex-end;
  width: 30%;
`;

export const Container2 = styled.View`
  width: 100%;
`;

export const Container4 = styled.View`
  
`;

interface IContainer3 {
  ml?: number;
}
export const Container3 = styled.View<IContainer3>`
  margin-left: ${(props) => props.ml || metrics.DistLeft}px;
  margin-bottom: 30px;
`;

export const Container5 = styled.View`
  flex-direction: row;
`;

export const Container6 = styled.View`
  width: 60%;
`;
export const Container7 = styled.View`
  width: 40%;
`;
