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

export const ContainerFlexStart = styled.View`
  align-items: flex-start;
  margin-bottom: ${metrics.DistBottom}px;
`;

export const ContainerAlignCenter = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${metrics.DistBottom}px;
`;

export const ContainerAlignRow = styled.View`
  flex-direction: row;
`;

export const ContainerObjectives = styled.View`
  margin-bottom: ${metrics.padding}px;
  padding-left: 20px;
`;

export const ContainerStatus = styled.View`
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  background-color: ${colors.primary};
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TitlePrice = styled.Text`
  font-size: 40px;
  color: ${colors.blackFont};
  text-align: center;
`;

export const TitleLabel = styled(TitlePrice as any)`
  font-size: ${fonts.big}px;
`;

export const LabelInfo = styled(TitlePrice as any)`
  font-size: ${fonts.regular}px;
`;

export const LabelInfoStatus = styled(TitlePrice as any)`
  font-size: ${fonts.regular}px;
  color: ${colors.white};
`;
