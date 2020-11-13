import React, { useState } from "react";
import { colors } from "../../styles";

import { Container, TextLabel, ContainerInput } from "./styles";

interface IProps {
  label: string;
}

const DefaultInput: React.FC<IProps> = ({ label, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <ContainerInput
        {...rest}
        bColor={isFocus ? colors.primary : undefined}
        onFocus={() => setIsFocus(true)}
      />
    </Container>
  );
};
export default DefaultInput;
