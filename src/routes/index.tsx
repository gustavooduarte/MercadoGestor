import React from "react";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/Start";
import IntroductionScreen from "../screens/Introduction";
import Question1Screen from "../screens/Question1";
import Question3Screen from "../screens/Question3";
// import MakingScreen from "../screens/Making";

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
          component={Question3Screen}
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
