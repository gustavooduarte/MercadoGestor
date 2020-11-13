import React from "react";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/Start";
import IntroductionScreen from "../screens/Introduction";
import Question1Screen from "../screens/Question1";
import Question3Screen from "../screens/Question3";
// import MakingScreen from "../screens/Making";
import Question4Screen from "../screens/Question4";
import Question6Screen from "../screens/Question6";

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
          component={StartScreen}
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
            title: "Dívidas?",
            ...headerBackgroundTopStacks,
          }}
          component={Question1Screen}
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

        {/* Question6Screen */}
        <MainStack.Screen
          name="Question6"
          options={{
            title: "Gestão Financeira",
            ...headerBackgroundTopStacks,
          }}
          component={Question6Screen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
