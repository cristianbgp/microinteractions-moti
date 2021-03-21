import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import CardsAppearanceScreen from "./screens/CardsAppearanceScreen";
import LandingScreen from "./screens/LandingScreen";
import EmojiReactionScreen from "./screens/EmojiReactionScreen";
import HeartScreen from "./screens/HeartScreen";
import ChartScreen from "./screens/ChartScreen";
import CallCardScreen from "./screens/CallCardScreen";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CardsAppearance" component={CardsAppearanceScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="EmojiReaction" component={EmojiReactionScreen} />
      <Stack.Screen name="Heart" component={HeartScreen} />
      <Stack.Screen name="Chart" component={ChartScreen} />
      <Stack.Screen name="CallCard" component={CallCardScreen} />
    </Stack.Navigator>
  );
}

function Routes() {
  return <MainStack />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
