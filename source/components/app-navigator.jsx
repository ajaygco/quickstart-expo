// Modules
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

// Create Navigators
const Stack = createNativeStackNavigator();

// Dummy Screens
const FirstScreen = () => <Text>Hello World!</Text>;

// Component: Presentation
export const AppNavigatorUi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Component: Logic
export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <AppNavigatorUi />
    </SafeAreaProvider>
  );
};
