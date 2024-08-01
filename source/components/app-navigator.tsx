// Modules
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Pages
import { Home } from "@app/components/pages/home/home";

// Types
type AppNavigatorProps = {};

// Navigators
const Stack = createNativeStackNavigator();

// Component
export const AppNavigator: React.FC<
  AppNavigatorProps
> = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <StatusBar style="inverted" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
