// Modules
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Pages
import { Home } from "@app/components/pages/home/home";

// Types
interface AppNavigatorCommonProps {}
interface AppNavigatorUiProps extends AppNavigatorCommonProps {}
interface AppNavigatorProps extends AppNavigatorCommonProps {}

// Create Navigators
const Stack = createNativeStackNavigator();

// Component: Presentation
export const AppNavigatorUi = ({}: AppNavigatorUiProps): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Component: Logic
export const AppNavigator = ({}: AppNavigatorProps): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <AppNavigatorUi />
    </SafeAreaProvider>
  );
};
