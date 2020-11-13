import React, { useState } from "react";
import { ScrollView } from "react-native";

import {
  Container,
  ContainerButton,
  Title,
  ContainerTitle,
  ContainerAlignRow,
} from "./styles";

import NavigationButton from "../../components/NavigationButton";
import DefaultCheckList from "../../components/DefaultCheckList";
import DefaultInput from "../../components/DefaultInput";
import { useNavigation } from "@react-navigation/native";

const Question5: React.FC = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerTitle>
        <Title>O que compõem suas contas não essenciais?</Title>
      </ContainerTitle>
      <DefaultCheckList
        label="Fast Food"
        onPress={() => setCheck1(!check1)}
        valueSelected={check1}
      />
      <DefaultCheckList
        label="Lazer"
        onPress={() => setCheck2(!check2)}
        valueSelected={check2}
      />
      <DefaultCheckList
        label="Roupas"
        onPress={() => setCheck3(!check3)}
        valueSelected={check3}
      />
      <DefaultCheckList
        label="Beleza"
        onPress={() => setCheck4(!check4)}
        valueSelected={check4}
      />
      <DefaultCheckList
        label="Academia"
        onPress={() => setCheck5(!check5)}
        valueSelected={check5}
      />
      <DefaultCheckList
        label="Outros"
        onPress={() => setCheck6(!check6)}
        valueSelected={check6}
      />
      {check6 ? <DefaultInput label="Remover Label" /> : null}

      <ContainerButton>
        <NavigationButton onPress={() => navigation.navigate("Introduction")} />
      </ContainerButton>
    </Container>
  );
};

export default Question5;
