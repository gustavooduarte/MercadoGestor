import React, { useState } from "react";
import { colors } from "../../styles";
import { Picker } from "@react-native-community/picker"

import { Container, TextLabel, ContainerComboBox } from "./styles";

interface IProps {
  label: string;
  items: Array<{ id: string; itemLabel: string; }>;
}

const DefaultComboBox: React.FC<IProps> = ({ label, items }) => {
  const [selectedItem, setSelectedItem] = useState("Selecione");
  
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <ContainerComboBox>
        <Picker
          selectedValue={selectedItem}
          onValueChange={itemValue => setSelectedItem(itemValue.toString())}
        >
          {
            items.map((item, index) => {
              return (
                <Picker.Item label={item.itemLabel} value={item.itemLabel} key={index} />
              )
            })
          }
        </Picker>
      </ContainerComboBox>
    </Container>
  );
};
export default DefaultComboBox;
