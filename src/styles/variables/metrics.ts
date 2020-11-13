import { Platform, Dimensions } from "react-native";

export default {
  marginError: 7,
  padding: 16,
  margin: 16,
  halfPadding: 8,
  halfMargin: 8,
  tabBarHeight: 50,
  DistBottom: 20,
  DistLeft: 20,
  screenWidth: Math.round(Dimensions.get("window").width),
  screenHeight: Math.round(Dimensions.get("screen").height),
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
};
