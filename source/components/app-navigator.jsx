// Modules
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Pages
import { Home } from "components/pages/home/home";

// Create Navigators
const Stack = createNativeStackNavigator();

// Component: Presentation
export const AppNavigatorUi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
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
