import React from "react";
import { ActivityIndicator } from "react-native";
import Ripple from "react-native-material-ripple";

import { Container, TextButton } from "./styles";

interface IProps {
  label: string;
  flagActivit?: boolean;
  onPress?(): void;
}

const DefaultButton: React.FC<IProps> = ({ label, flagActivit, onPress }) => (
  <Ripple onPress={onPress}>
    <Container>
      {flagActivit ? (
        <ActivityIndicator color="white" />
      ) : (
        <TextButton>{label}</TextButton>
      )}
    </Container>
  </Ripple>
);

export default DefaultButton;
