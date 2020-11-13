import React, { useState } from "react";

import {
  Container,
  TextTitle,
  CheckContainer,
  Container2,
  Text,
} from "./styles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, metrics } from "../../styles";

interface IProps {
  label: string;
  fontSize?: number;
  textAlign?: string;
  marginLeft?: number;
  isFlag?: number;
  setFlag(Flag: number): void;
}

const DefaultRadioList: React.FC<IProps> = ({
  label,
  fontSize,
  textAlign,
  marginLeft,
  isFlag,
  setFlag,
}) => {
  const [valueSelected, setValueSelected] = useState<number>(-1);

  return (
    <Container>
      <TextTitle fs={fontSize} ta={textAlign} ml={marginLeft}>
        {label}
      </TextTitle>
      <Container2>
        <CheckContainer
          onPress={() => {
            valueSelected !== 0 ? setValueSelected(0) : null;
            isFlag !== 0 ? setFlag(0) : null;
          }}
          rippleContainerBorderRadius={30}
        >
          {valueSelected === 0 ? (
            <MaterialCommunityIcons
              name="circle-slice-8"
              size={30}
              color={colors.primary}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              size={30}
              color={colors.Gray}
            />
          )}
        </CheckContainer>
        <Text>Sim</Text>
      </Container2>
      <Container2>
        <CheckContainer
          onPress={() => {
            valueSelected !== 1 ? setValueSelected(1) : null;
            isFlag !== 1 ? setFlag(1) : null;
          }}
          rippleContainerBorderRadius={30}
        >
          {valueSelected === 1 ? (
            <MaterialCommunityIcons
              name="circle-slice-8"
              size={30}
              color={colors.primary}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              size={30}
              color={colors.Gray}
            />
          )}
        </CheckContainer>
        <Text>Não</Text>
      </Container2>
    </Container>
  );
};

export default DefaultRadioList;
