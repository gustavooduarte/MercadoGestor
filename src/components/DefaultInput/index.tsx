import React, { useState, forwardRef } from "react";
import { InputProps } from "react-native-elements";
import { colors } from "../../styles";

import { Container, TextLabel, ContainerInput, Text } from "./styles";

interface IProps extends InputProps {
  label?: string;
  leftI?: string;
}

const DefaultInput: React.ForwardRefRenderFunction<unknown, IProps> = (
  { label, leftI, ...rest },
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
        onBlur={() => setIsFocus(false)}
        leftIcon={leftI ? <Text>{leftI}</Text> : null}
      />
    </Container>
  );
};
export default forwardRef(DefaultInput);
