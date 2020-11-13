import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";

import Router from "./src/routes";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
