import React from "react";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/Start";
import IntroductionScreen from "../screens/Introduction";

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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
