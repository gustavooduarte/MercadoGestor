import React, { useState } from "react";

import { Container } from "./styles";

import DefaultCheckList from "../../components/DefaultCheckList";

const Start: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);

  return (
    <Container>
      <DefaultCheckList
        label="TESTE"
        onPress={() => setIsSelected(!isSelected)}
        valueSelected={isSelected}
      />
      <DefaultCheckList
        label="TESTE1"
        onPress={() => setIsSelected1(!isSelected1)}
        valueSelected={isSelected1}
      />
      <DefaultCheckList
        label="TESTE2"
        onPress={() => setIsSelected2(!isSelected2)}
        valueSelected={isSelected2}
      />
      <DefaultCheckList
        label="TESTE3"
        onPress={() => setIsSelected3(!isSelected3)}
        valueSelected={isSelected3}
      />
      <DefaultCheckList
        label="TESTE3"
        onPress={() => setIsSelected4(!isSelected4)}
        valueSelected={isSelected4}
      />
      <DefaultCheckList
        label="TESTE3"
        onPress={() => setIsSelected5(!isSelected5)}
        valueSelected={isSelected5}
      />
    </Container>
  );
};

export default Start;
