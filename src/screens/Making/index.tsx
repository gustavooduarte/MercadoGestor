import React, { useState } from "react";

import { Container } from "./styles";

import DefaultCheckList from "../../components/DefaultCheckList";

const DATA = [
  {
    id: "1",
    itemLabel: "Teste 01",
    isSelected: false,
  },
  {
    id: "2",
    itemLabel: "Teste 02",
    isSelected: false,
  },
  {
    id: "3",
    itemLabel: "Teste 03",
    isSelected: false,
  },
  {
    id: "4",
    itemLabel: "Teste 04",
    isSelected: false,
  },
];

const Start: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

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
    </Container>
  );
};

export default Start;
