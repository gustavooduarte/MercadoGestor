import React from "react";
import { ActivityIndicator } from "react-native";
import Ripple from "react-native-material-ripple";
import { Fontisto } from '@expo/vector-icons';

import { Container } from "./styles";

interface IProps {
  flagActivit?: boolean;
  onPress?(): void;
}

const NavigationButton: React.FC<IProps> = ({ flagActivit, onPress }) => (
  <Ripple onPress={onPress}>
    <Container>
      {flagActivit ? (
        <ActivityIndicator color="white" />
      ) : (
          <Fontisto name="arrow-right" size={24} color="white" />
      )}
    </Container>
  </Ripple>
);

export default NavigationButton;
