import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";

import { Container, ContainerButton } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";
import DefaultRadioList from "../../components/DefaultRadioList";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "../../styles";

const Question2: React.FC = () => {
  const [aux, setAux] = useState<string>();
  const [isFlag, setFlag] = useState<number>();
  const navigation = useNavigation();
  return (
    <Container>
      <DefaultRadioList
        label="Tem dívidas?"
        fontSize={fonts.bigger}
        isFlag={isFlag}
        setFlag={setFlag}
      />
      {isFlag === 0 ? (
        <TextInputMask
          type="money"
          value={aux}
          onChangeText={(value) => {
            setAux(value);
          }}
          customTextInput={DefaultInput}
          customTextInputProps={{
            label: "Qual sua dívida hoje?",
          }}
        />
      ) : null}
      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Introduction")} />
      </ContainerButton>
    </Container>
  );
};

export default Question2;
