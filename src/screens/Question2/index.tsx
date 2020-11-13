import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import {
  Container,
  ContainerButton,
  Container2,
  Container3,
  Container4,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";
import DefaultRadioList from "../../components/DefaultRadioList";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "../../styles";
import DefaultCheckList from "../../components/DefaultCheckList";
const Question2: React.FC = () => {
  const [aux, setAux] = useState<string>();
  const [isFlag, setFlag] = useState<number>();
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <DefaultRadioList
          label="Tem dívidas?"
          fontSize={fonts.bigger}
          isFlag={isFlag}
          setFlag={setFlag}
        />
        {isFlag === 0 ? (
          <Container2>
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
            <Container3>
              <DefaultCheckList
                label="Crediário/Empréstimo pessoal"
                onPress={() => setIsSelected(!isSelected)}
                valueSelected={isSelected}
              />
              <DefaultCheckList
                label="Crédito rotativo/cheque especial"
                onPress={() => setIsSelected1(!isSelected1)}
                valueSelected={isSelected1}
              />
              <DefaultCheckList
                label="Parcelas no cartão de crédito"
                onPress={() => setIsSelected2(!isSelected2)}
                valueSelected={isSelected2}
              />
              <DefaultCheckList
                label="Financiamento de imóvel ou auto"
                onPress={() => setIsSelected3(!isSelected3)}
                valueSelected={isSelected3}
              />
              <DefaultCheckList
                label="Consignado"
                onPress={() => setIsSelected4(!isSelected4)}
                valueSelected={isSelected4}
              />
              <DefaultCheckList
                label="Empréstimo familiar"
                onPress={() => setIsSelected5(!isSelected5)}
                valueSelected={isSelected5}
              />
            </Container3>
            <TextInputMask
              type="money"
              value={aux}
              onChangeText={(value) => {
                setAux(value);
              }}
              customTextInput={DefaultInput}
              customTextInputProps={{
                label: "Quanto é sua dívida hoje?",
              }}
            />
            <TextInputMask
              type="money"
              value={aux}
              onChangeText={(value) => {
                setAux(value);
              }}
              customTextInput={DefaultInput}
              customTextInputProps={{
                label: "Quanto é a taxa de juros delas?",
                leftI: "1°",
              }}
            />
            <TextInputMask
              type="money"
              value={aux}
              onChangeText={(value) => {
                setAux(value);
              }}
              customTextInput={DefaultInput}
              customTextInputProps={{
                leftI: "2°",
              }}
            />
          </Container2>
        ) : null}
        <Container4>
          <ContainerButton>
            <NavigationButton
              onPress={() => navigation.navigate("Question3")}
            />
          </ContainerButton>
        </Container4>
      </Container>
    </ScrollView>
  );
};

export default Question2;
