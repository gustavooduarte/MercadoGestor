import React from "react";
import { Feather } from "@expo/vector-icons";

import { colors } from "../../styles";

import { CheckContainer, TextItemLabel, CheckListItem } from "./styles";

interface IProps {
  label: string;
  valueSelected: boolean;
  onPress(): void;
}

const CheckList: React.FC<IProps> = ({ valueSelected, label, onPress }) => {
  return (
    <CheckListItem>
      <CheckContainer onPress={onPress} rippleContainerBorderRadius={30}>
        {valueSelected ? (
          <Feather name="check-square" size={24} color={colors.primary} />
        ) : (
          <Feather name="square" size={24} color={colors.lightGray} />
        )}
      </CheckContainer>
      <TextItemLabel>{label}</TextItemLabel>
    </CheckListItem>
  );
};

export default CheckList;
