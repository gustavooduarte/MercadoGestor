import React from "react";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/Start";
import IntroductionScreen from "../screens/Introduction";
import Question1Screen from "../screens/Question1";
import Question3Screen from "../screens/Question3";
import Question5Screen from "../screens/Question5";
import Question7Screen from "../screens/Question7";
// import MakingScreen from "../screens/Making";
import Question4Screen from "../screens/Question4";
import Question6Screen from "../screens/Question6";

import Question2Screen from "../screens/Question2";
import { headerBackgroundTopStacks } from "./styles";

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* StartScreen */}
        <MainStack.Screen
          name="Start"
          options={{
            title: "Gestão Financeira",
            ...headerBackgroundTopStacks,
          }}
          component={Question7Screen}
        />

        {/* IntroductionScreen */}
        <MainStack.Screen
          name="Introduction"
          options={{
            title: "Introdução",
            ...headerBackgroundTopStacks,
          }}
          component={IntroductionScreen}
        />

        {/* Question1Screen */}
        <MainStack.Screen
          name="Question1"
          options={{
            title: "Salário?",
            ...headerBackgroundTopStacks,
          }}
          component={Question1Screen}
        />
        {/* Question2Screen */}
        <MainStack.Screen
          name="Question2"
          options={{
            title: "Dívidas?",
            ...headerBackgroundTopStacks,
          }}
          component={Question2Screen}
        />
        {/* Question3Screen */}
        <MainStack.Screen
          name="Question3"
          options={{
            title: "Contas Essenciais",
            ...headerBackgroundTopStacks,
          }}
          component={Question3Screen}
        />

        {/* Question4Screen */}
        <MainStack.Screen
          name="Question4"
          options={{
            title: "Gestão Financeira",
            ...headerBackgroundTopStacks,
          }}
          component={Question4Screen}
        />

        {/* Question5Screen */}
        <MainStack.Screen
          name="Question5"
          options={{
            title: "Contas Não Essenciais",
            ...headerBackgroundTopStacks,
          }}
          component={Question5Screen}
        />
        
        {/* Question6Screen */}
        <MainStack.Screen
          name="Question6"
          options={{
            title: "Gestão Financeira",
            ...headerBackgroundTopStacks,
          }}
          component={Question6Screen}

        {/* Question7Screen */}
        <MainStack.Screen
          name="Question7"
          options={{
            title: "Fundo de Emergência",
            ...headerBackgroundTopStacks,
          }}
          component={Question7Screen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
