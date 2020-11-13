import React, { useState, forwardRef } from "react";
import { InputProps } from "react-native-elements";
import { colors } from "../../styles";

import { Container, TextLabel, ContainerInput } from "./styles";

interface IProps extends InputProps {
  label: string;
}

const DefaultInput: React.ForwardRefRenderFunction<unknown, IProps> = (
  { label, ...rest },
  ref
) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <ContainerInput
        ref={ref}
        {...rest}
        bColor={isFocus ? colors.primary : undefined}
        onFocus={() => setIsFocus(true)}
      />
    </Container>
  );
};
export default forwardRef(DefaultInput);
