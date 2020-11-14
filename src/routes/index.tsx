import React from "react";

import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/Start";
import FinancialReserveScreen from "../screens/FinancialReserve";
import FinancialProjectionScreen from "../screens/FinancialProjection";
import IntroductionScreen from "../screens/Introduction";
import Question1Screen from "../screens/Question1";
import Question2Screen from "../screens/Question2";
import Question3Screen from "../screens/Question3";
import Question4Screen from "../screens/Question4";
import Question5Screen from "../screens/Question5";
import Question6Screen from "../screens/Question6";
import Question7Screen from "../screens/Question7";
import Question8Screen from "../screens/Question8";
import FinishScreen from "../screens/Finish";
import HomeScreen from "../screens/Home";
import ProductListScreen from "../screens/ProductList";
import { headerBackgroundTopStacks } from "./styles";
import { colors } from "../styles";

const TabMain = createBottomTabNavigator();

function BottonTabScreens() {
  return (
    <TabMain.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveBackgroundColor: colors.primary,
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.white,
        inactiveTintColor: colors.secondary,
      }}
    >
      <TabMain.Screen
        name="Início"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <TabMain.Screen
        name="Projeção"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
        }}
        component={FinancialProjectionScreen}
      />
      <TabMain.Screen
        name="Produtos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-clock-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={ProductListScreen}
      />
      <TabMain.Screen
        name="Reserva"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="piggy-bank" size={size} color={color} />
          ),
        }}
        component={FinancialReserveScreen}
      />
    </TabMain.Navigator>
  );
}

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* StartScreen */}
        <MainStack.Screen
          name="Start"
          options={{
            title: "Mercado Gestor",
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
            title: "Média Salarial",
            ...headerBackgroundTopStacks,
          }}
          component={Question1Screen}
        />

        {/* Question2Screen */}
        <MainStack.Screen
          name="Question2"
          options={{
            title: "Dívidas",
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
            title: "Média das Contas Essenciais",
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
            title: "Média das Contas Não Essenciais",
            ...headerBackgroundTopStacks,
          }}
          component={Question6Screen}
        />

        {/* Question7Screen */}
        <MainStack.Screen
          name="Question7"
          options={{
            title: "Fundo de Emergência",
            ...headerBackgroundTopStacks,
          }}
          component={Question7Screen}
        />

        {/* Question8Screen */}
        <MainStack.Screen
          name="Question8"
          options={{
            title: "Objetivos Financeiros",
            ...headerBackgroundTopStacks,
          }}
          component={Question8Screen}
        />

        {/* FinishScreen */}
        <MainStack.Screen
          name="Finish"
          options={{
            title: "Finalizado",
            ...headerBackgroundTopStacks,
          }}
          component={FinishScreen}
        />

        {/* TabNavigation */}
        <MainStack.Screen
          name="BottonTabScreens"
          options={{
            title: "Mercado Gestor",
            ...headerBackgroundTopStacks,
          }}
          component={BottonTabScreens}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
