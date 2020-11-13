import React from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  CheckContainer,
  TextItemLabel,
  CheckListItem,
} from "./styles";

interface IProps {
  // checkListItems: Array<{
  //   id: string;
  //   itemLabel: string;
  // }>;
  label: string;
  valueSelected: boolean;
  onPress(): void;
  // setValueSelected(valueSelected: number): void;
}

const CheckList: React.FC<IProps> = ({
  // checkListItems,
  // valueSelected,
  // setValueSelected,
  valueSelected,
  label,
  onPress,
}) => {
  return (
    <CheckListItem>
      <CheckContainer onPress={onPress} rippleContainerBorderRadius={30}>
        {valueSelected ? (
          <Feather name="check-square" size={24} color="black" />
        ) : (
          <Feather name="square" size={24} color="black" />
        )}
      </CheckContainer>
      <TextItemLabel>{label}</TextItemLabel>
    </CheckListItem>
  );
};

export default CheckList;
