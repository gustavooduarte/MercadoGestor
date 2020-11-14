import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  ContainerButton,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultInput from "../../components/DefaultInput";
import DefaultRadioList from "../../components/DefaultRadioList";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "../../styles";
import DefaultCheckList from "../../components/DefaultCheckList";
const Question2: React.FC = () => {
  const [aux, setAux] = useState<string>();
  const [aux1, setAux1] = useState<string>();
  const [aux2, setAux2] = useState<string>();
  const [aux3, setAux3] = useState<string>();
  const [aux4, setAux4] = useState<string>();
  const [aux5, setAux5] = useState<string>();
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
            <Container3>
              <DefaultCheckList
                label="Crediário/Empréstimo pessoal"
                onPress={() => setIsSelected(!isSelected)}
                valueSelected={isSelected}
              />
              {isSelected ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux}
                        onChangeText={(value) => {
                          setAux(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
              <DefaultCheckList
                label="Crédito rotativo/cheque especial"
                onPress={() => setIsSelected1(!isSelected1)}
                valueSelected={isSelected1}
              />
              {isSelected1 ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux1}
                        onChangeText={(value) => {
                          setAux1(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
              <DefaultCheckList
                label="Parcelas no cartão de crédito"
                onPress={() => setIsSelected2(!isSelected2)}
                valueSelected={isSelected2}
              />
              {isSelected2 ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux2}
                        onChangeText={(value) => {
                          setAux2(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
              <DefaultCheckList
                label="Financiamento de imóvel ou auto"
                onPress={() => setIsSelected3(!isSelected3)}
                valueSelected={isSelected3}
              />
              {isSelected3 ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux3}
                        onChangeText={(value) => {
                          setAux3(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
              <DefaultCheckList
                label="Consignado"
                onPress={() => setIsSelected4(!isSelected4)}
                valueSelected={isSelected4}
              />
              {isSelected4 ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux4}
                        onChangeText={(value) => {
                          setAux4(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
              <DefaultCheckList
                label="Empréstimo familiar"
                onPress={() => setIsSelected5(!isSelected5)}
                valueSelected={isSelected5}
              />
              {isSelected5 ? (
                <Container2>
                  <Container5>
                    <Container6>
                      <TextInputMask
                        type="money"
                        value={aux5}
                        onChangeText={(value) => {
                          setAux5(value);
                        }}
                        customTextInput={DefaultInput}
                        customTextInputProps={{
                          label: "Valor",
                        }}
                      />
                    </Container6>
                    <Container7>
                      <DefaultInput label="Taxa" />
                    </Container7>
                  </Container5>
                  <Container3 ml={25}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </Container3>
                </Container2>
              ) : null}
            </Container3>
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
