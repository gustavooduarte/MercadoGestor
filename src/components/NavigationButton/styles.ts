import styled from "styled-components/native";

import { colors, metrics } from "../../styles";

export const Container = styled.View`
  background-color: ${colors.primary};
  padding: ${metrics.padding}px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 100%
`;

export const Ripple = styled.View`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;


