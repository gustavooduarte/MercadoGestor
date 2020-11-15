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

const Question8: React.FC = () => {
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
        <DefaultCheckList
          label="Aquisição de veículo"
          onPress={() => setCheck2(!check2)}
          valueSelected={check2}
        />
        <DefaultCheckList
          label="Viagens"
          onPress={() => setCheck3(!check3)}
          valueSelected={check3}
        />
        <DefaultCheckList
          label="Qualidade de vida na aposentadoria"
          onPress={() => setCheck4(!check4)}
          valueSelected={check4}
        />
        <DefaultCheckList
          label="Segurança e estabilidade financeira"
          onPress={() => setCheck5(!check5)}
          valueSelected={check5}
        />
        <DefaultCheckList
          label="Casamento"
          onPress={() => setCheck6(!check6)}
          valueSelected={check6}
        />
        <DefaultCheckList
          label="Intercâmbio"
          onPress={() => setCheck7(!check7)}
          valueSelected={check7}
        />
        <DefaultCheckList
          label="Abrir o próprio negócio"
          onPress={() => setCheck8(!check8)}
          valueSelected={check8}
        />
        <DefaultCheckList
          label="Poupança para os filhos"
          onPress={() => setCheck9(!check9)}
          valueSelected={check9}
        />
        <DefaultCheckList
          label="Quitar dívidas"
          onPress={() => setCheck10(!check10)}
          valueSelected={check10}
        />
        <DefaultCheckList
          label="Imóvel Próprio"
          onPress={() => setCheck11(!check11)}
          valueSelected={check11}
        />
        <DefaultCheckList
          label="Outros"
          onPress={() => setCheck12(!check12)}
          valueSelected={check12}
        />
        {check12 ? <DefaultInput /> : null}

        <ContainerButton>
          <NavigationButton onPress={() => navigation.navigate("Finish")} />
        </ContainerButton>
      </Container>
    </ScrollView>
  );
};

export default Question8;
