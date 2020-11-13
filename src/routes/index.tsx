import React from "react";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import Introduction from "../screens/Introduction";

import { headerBackgroundTopStacks } from "./styles";

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* HomeScreen */}
        <MainStack.Screen
          name="Home"
          options={{
            title: "Gestão Financeira",
            ...headerBackgroundTopStacks,
          }}
          component={HomeScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
