import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Container, ContainerButton, Title, ContainerTitle } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultCheckList from "../../components/DefaultCheckList";
import { TextInputMask } from "react-native-masked-text";
import DefaultInput from "../../components/DefaultInput";
import { useNavigation } from "@react-navigation/native";

const Question8: React.FC = () => {
  const [aux1, setAux1] = useState<string>();
  const [aux2, setAux2] = useState<string>();
  const [aux3, setAux3] = useState<string>();
  const [aux4, setAux4] = useState<string>();
  const [aux5, setAux5] = useState<string>();
  const [aux6, setAux6] = useState<string>();
  const [aux7, setAux7] = useState<string>();
  const [aux8, setAux8] = useState<string>();
  const [aux9, setAux9] = useState<string>();
  const [aux10, setAux10] = useState<string>();
  const [aux11, setAux11] = useState<string>();
  const [aux12, setAux12] = useState<string>();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ContainerTitle>
          <Title>Quais são seus objetivos neste momento?</Title>
        </ContainerTitle>
        <DefaultCheckList
          label="Melhorar investimentos"
          onPress={() => setCheck1(!check1)}
          valueSelected={check1}
        />
        {check1 ? (
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
        ) : null}
        <DefaultCheckList
          label="Aquisição de veículo"
          onPress={() => setCheck2(!check2)}
          valueSelected={check2}
        />
        {check2 ? (
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
        ) : null}
        <DefaultCheckList
          label="Viagens"
          onPress={() => setCheck3(!check3)}
          valueSelected={check3}
        />
        {check3 ? (
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
        ) : null}
        <DefaultCheckList
          label="Qualidade de vida na aposentadoria"
          onPress={() => setCheck4(!check4)}
          valueSelected={check4}
        />
        {check4 ? (
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
        ) : null}
        <DefaultCheckList
          label="Segurança e estabilidade financeira"
          onPress={() => setCheck5(!check5)}
          valueSelected={check5}
        />
        {check5 ? (
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
        ) : null}
        <DefaultCheckList
          label="Casamento"
          onPress={() => setCheck6(!check6)}
          valueSelected={check6}
        />
        {check6 ? (
          <TextInputMask
            type="money"
            value={aux6}
            onChangeText={(value) => {
              setAux6(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Intercâmbio"
          onPress={() => setCheck7(!check7)}
          valueSelected={check7}
        />
        {check7 ? (
          <TextInputMask
            type="money"
            value={aux7}
            onChangeText={(value) => {
              setAux7(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Abrir o próprio negócio"
          onPress={() => setCheck8(!check8)}
          valueSelected={check8}
        />
        {check8 ? (
          <TextInputMask
            type="money"
            value={aux8}
            onChangeText={(value) => {
              setAux8(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Poupança para os filhos"
          onPress={() => setCheck9(!check9)}
          valueSelected={check9}
        />
        {check9 ? (
          <TextInputMask
            type="money"
            value={aux9}
            onChangeText={(value) => {
              setAux9(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Quitar dívidas"
          onPress={() => setCheck10(!check10)}
          valueSelected={check10}
        />
        {check10 ? (
          <TextInputMask
            type="money"
            value={aux10}
            onChangeText={(value) => {
              setAux10(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Imóvel Próprio"
          onPress={() => setCheck11(!check11)}
          valueSelected={check11}
        />
        {check11 ? (
          <TextInputMask
            type="money"
            value={aux11}
            onChangeText={(value) => {
              setAux11(value);
            }}
            customTextInput={DefaultInput}
            customTextInputProps={{
              label: "Valor",
            }}
          />
        ) : null}
        <DefaultCheckList
          label="Outros"
          onPress={() => setCheck12(!check12)}
          valueSelected={check12}
        />
        {check12 ? (
          <Container>
            <DefaultInput label="Qual o objetivo?" />
            <TextInputMask
              type="money"
              value={aux12}
              onChangeText={(value) => {
                setAux12(value);
              }}
              customTextInput={DefaultInput}
              customTextInputProps={{
                label: "Valor",
              }}
            />
          </Container>
        ) : null}

        <ContainerButton>
          <NavigationButton onPress={() => navigation.navigate("Finish")} />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
};

export default Question8;
