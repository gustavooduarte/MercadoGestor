import React, { useState } from "react";

import { Container, ContainerButton, Title, ContainerTitle } from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultCheckList from "../../components/DefaultCheckList";
import DefaultInput from "../../components/DefaultInput";
import { useNavigation } from "@react-navigation/native";

const Question3: React.FC = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTitle>
        <Title>Quais são suas contas essenciais?</Title>
      </ContainerTitle>
      <DefaultCheckList
        label="Aluguel"
        onPress={() => setCheck1(!check1)}
        valueSelected={check1}
      />
      <DefaultCheckList
        label="Água"
        onPress={() => setCheck2(!check2)}
        valueSelected={check2}
      />
      <DefaultCheckList
        label="Luz"
        onPress={() => setCheck3(!check3)}
        valueSelected={check3}
      />
      <DefaultCheckList
        label="Mercado"
        onPress={() => setCheck4(!check4)}
        valueSelected={check4}
      />
      <DefaultCheckList
        label="Transporte"
        onPress={() => setCheck5(!check5)}
        valueSelected={check5}
      />
      <DefaultCheckList
        label="Telefone/Celular"
        onPress={() => setCheck6(!check6)}
        valueSelected={check6}
      />
      <DefaultCheckList
        label="Escola/Faculdade"
        onPress={() => setCheck7(!check7)}
        valueSelected={check7}
      />
      <DefaultCheckList
        label="Plano de Saúde"
        onPress={() => setCheck8(!check8)}
        valueSelected={check8}
      />
      <DefaultCheckList
        label="Outros"
        onPress={() => setCheck9(!check9)}
        valueSelected={check9}
      />
      {check9 ? <DefaultInput /> : null}
      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Question4")} />
      </ContainerButton>
    </Container>
  );
};

export default Question3;
